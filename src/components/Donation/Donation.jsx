import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getItems } from "../utility/Storage";
import { Link } from "react-router-dom";

const Donation = () => {
  const [selected, setSelected] = useState([]);
  const [slicedata,setSliceData] = useState(4);

  const cards = useLoaderData();
  useEffect(() => {
    const getitem = getItems();

    if (cards.length > 0) {
      const item = cards.filter((card) => getitem.includes(card.id));
      console.log(item, cards, getitem);
      setSelected(item);
    }
  }, []);

  return (
      <div> 
    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-6 mt-20  ">
      {selected.slice(0, slicedata).map((card) => (
          <div key={card.id} style={{ backgroundColor: card.background, color: card.color }} className="rounded-lg"  >
           <div className="flex align-middle ">
            <div className=" w-1/3 h-42 ">    <img src={card.image} className="h-full w-full " alt="" /></div>
            <div className="p-2 text-left my-auto">
              <p className=" w-[50%] text-left rounded text-[12px] font-bold px-2 p-1  bg-[#ff444a33] mt-2" style={{ backgroundColor: card.background, color: card.color }}>{card.category}{" "}  </p>
              <p className=" text-left text-black font-bold ">{card.title}</p>
              <p className="text-left font-bold py-1" >price ${card.price}</p>
              <Link to={`/details/${card.id}`}><button className="text-left text-[14px] font-bold px-5 py-1 rounded" style={{ backgroundColor: card.color, color: 'white' }} >View Details</button></Link>
            </div>
           </div>
          </div>
      ))}
     
    </div>
    <div className={slicedata === cards.length  && 'hidden' } >
      <button onClick={()=> setSliceData(cards.length)} className="btn my-8 btn-success w-32 text-lg text-center mx-auto">See all</button>
    </div>
    </div>
  );
};

export default Donation;
