"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const ChapterSelection = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-3">
          <p className="text-2xl">Oshi no Ko Chapter 135</p>
          <p className="text-[#8b949e] self-center text-base">
            My Star Chapter 135
          </p>
        </div>
      </div>
      <div className=" p-4 ">
        <button
          title="Toggle Theme"
          class="
        w-12 
        h-6 
        rounded-full 
        p-1 
        bg-gray-400 
        dark:bg-gray-600 
        relative 
        transition-colors 
        duration-500 
        ease-in
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-700 
        dark:focus:ring-blue-600 
        focus:border-transparent
      "
        >
          <div
            id="toggle"
            class="
            rounded-full 
            w-4 
            h-4 
            bg-blue-600 
            dark:bg-blue-500 
            relative 
            ml-0 
            dark:ml-6 
            pointer-events-none 
            transition-all 
            duration-300 
            ease-out
        "
          ></div>
        </button>
      </div>

      <div className="px-3 flex justify-between items-center">
        <div>
          <Popup
            trigger={
              <button className="bg-blue-800 text-white rounded-md px-4 py-3">
                <div className="flex items-center gap-2">
                  <GiHamburgerMenu /> <p>chapter selection</p>
                </div>
              </button>
            }
            position="right center"
            modal
            nested
          >
            {(close) => (
              <div className=" bg-black text-slate-200 p-4 rounded-lg shadow-md">
                <p className="text-2xl mb-4">Chapter Selection</p>
                <div className="  flex justify-center pb-6  text-xl">1-100</div>
                <div className="gap-4 flex  flex-wrap  justify-center ">
                  {[...Array(50).keys()].map((index) => (
                    <div
                      key={index}
                      className="  bg-[#212328] rounded-md p-1 cursor-pointer hover:text-yellow-300"
                    >
                      <p>Chapter {index + 1}</p>
                    </div>
                  ))}
                </div>
                <button
                  className="bg-blue-700 text-white rounded-md px-4 py-3 mt-4"
                  onClick={close}
                >
                  Close
                </button>
              </div>
            )}
          </Popup>
        </div>
        <div>
          <button className="bg-blue-700 text-white rounded-md px-4 py-3">
            <div className="flex items-center gap-2">
              {" "}
              <IoIosArrowBack /> <p>previous chapter</p>
            </div>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChapterSelection;
