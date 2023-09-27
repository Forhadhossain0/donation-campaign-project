import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useLoaderData, useParams } from "react-router-dom";
import {  stogerItems } from '../utility/Storage';
const Details = () => {


    const  {id} = useParams()
    const idx = parseInt(id)
    const data = useLoaderData()
    const card = data.find(card => card.id === idx);

    const notify = () => {
        stogerItems(idx);
        toast("You have added Successfully!!");
    }

    return (
        <div className="mt-16">
            
            <div className='lg:h-[100vh] md:h-[100vh] h-[30vh]'  style={{background:`url(${card.image})`,width:'100%',position:'relative',backgroundRepeat:'no-repeat',backgroundSize:'cover'}} >
           
                {/* <img src={card.image} className="w-10/12 mx-auto h-[80vh] relative overflow-hidden" alt="" /> */}
                <div className="bg-[#0b0b0b] opacity-50 w-full h-[110px] absolute bottom-0  " >  </div>
                <button  onClick={notify}  style={{ backgroundColor: card.color,  }}  className= "px-3 z-10 left-10 bottom-10 text-white py-2 absolute  rounded "> Donate ${card.price}</button>
            </div>
               <ToastContainer className=" left-1/3 top-60" />

            <div className="text-left ">
            <h2 className="font-bold text-black text-2xl py-8">{card.title}</h2>
            <p className='text-justify'>{card.description}</p>
            </div>
           
        </div>
    );
};

export default Details;