import React from "react";
import Image from "next/image";
import anime1 from "../assets/anime1.jpg"

const Trendingmangs = () => {
  return (
    <div className=" w-full flex flex-col flex-wrap gap-5  py-6 bg-black mb-3 ">
      <h3 className=" font-medium px-5 text-[25px]">New Chapters</h3>
      <div className=" px-5 flex  items-center  flex-wrap gap-6">
        {/* here the card start */}
        {[1, 2, 4, 4, 5, 5, 14, 15, 16, 17, 18, 13].map((item, index) => (
          <div key={index} className=" flex flex-col">
            <Image
              className=" rounded-lg w-[287px] h-[208px] object-cover"
              src={anime1} // Path to your image inside the public folder
              alt="Description of the image"
              width={150}
              height={200}
            />
            <p className=" mt-3">#210</p>
            <p>I want to eat your pancreas</p>
            <div className=" flex gap-2 items-center">
                <div className=" bg-[#212328] p-1 ">manga</div>
                <div className=" bg-[#212328] p-1 ">2005</div>
                <div className=" bg-[#212328] p-1 ">publishing</div>


            </div>
        
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trendingmangs;
