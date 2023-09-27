import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Homedonatecard.css'

const Homedonatecard = () => {
  const [mydata, setMydata] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchClicked, setSearchClicked] = useState(false); //ata sobsomoy show korar jonno ba empty thakle show korbe

  useEffect(() => {
    fetch("../../../public/mydata.json")
      .then((res) => res.json())
      .then((data) => setMydata(data));
  }, []);

  const handleSearch = () => {
    const inputField = document.getElementById("inputfield");
    const inputValue = inputField.value;

    if (inputValue) {
      const updatedData = mydata.filter( card =>
        card.category.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilteredData(updatedData);
     }
     else { setFilteredData(mydata); }
    setSearchClicked(true);
  };

  return (
    <>
      <div className="imgadd  absolute left-0 top-0 z-0 ">
        <div className="hero  overly">
          <div className="hero-content  text-center">
            <div className=" lg:mt-28 ">
              <h1 className="text-4xl text-black font-bold p-10">  I Grow By Helping People In Need  </h1>

              <input id="inputfield"  type="text" placeholder="Search here...."
                className="input focus:outline-none h-[57px] bg-white rounded-e-none lg:w-full   max-w-xs"  />
              <button onClick={handleSearch}  className="btn bg-[#FF444A] text-white rounded-s-none px-8   h-[56px] border-none "  >
                Search 
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[550px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 rounded-sm gap-5 font-bold text-left">

          {
          searchClicked ? filteredData.map((data) => (
                <Link key={data.id} to={`/details/${data.id}`}>
                  <div   className="sm:mx-auto rounded shadow-lg" style={{ backgroundColor: data.background, color: data.color }} >
                    <img src={data.image} alt="" />
                    <div className="px-2">
                      <p className=" w-[26%] text-center rounded text-[12px] px-2 p-1  bg-[#ff444a33] mt-2">
                        {data.category}{" "} </p>
                      <p className="text-[14px]">{data.title}</p>
                    </div>
                  </div>
                </Link>
              )) : mydata.map((data) => (
                <Link key={data.id} to={`/details/${data.id}`}>
                  <div
                    className="sm:mx-auto rounded shadow-lg"
                    style={{ backgroundColor: data.background, color: data.color }}
                  >
                    <img src={data.image} alt="" />
                    <div className="px-2">
                      <p className=" w-[26%] text-center rounded text-[12px] px-2 p-1  bg-[#ff444a33] mt-2">
                        {data.category}{" "}
                      </p>
                      <p className="text-[14px]">{data.title}</p>
                    </div>
                  </div>
                </Link>
              ))}
        </div>
      </div>
    </>
  );
};

export default Homedonatecard;
