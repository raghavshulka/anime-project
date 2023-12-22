import React from "react";
import Image from "next/image";
import anime from "../assets/anime.jpg";

const Homecard = () => {
  return (
    <div className=" w-full flex flex-col flex-wrap gap-5  py-6 bg-slate-800 mb-3 ">
      <h3 className= " font-medium px-5 text-[25px]">Featured Chapters</h3>
      <div className=" px-5 flex  items-center flex-wrap gap-6 ">
        {/* here the card start */}
        {
            [1, 2, 4, 4, 5, 5, 89, 69].map((item, index) => (
                <div key={index} className=" flex flex-col">
          <Image
            className=" rounded-lg w-[212px] h-[180px] object-cover "
            src={anime} // Path to your image inside the public folder
            alt="Description of the image"
            width={150}
            height={200}
          />
          <p className=" mt-3">#110</p>
          <p>your name</p>
        </div>
            ))
        }

        
      </div>
    </div>
  );
};

export default Homecard;
