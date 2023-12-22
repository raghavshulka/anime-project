'use client'
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
      <div className="pl-2">
        <label className="relative inline-flex items-center mb-5 cursor-pointer">
        </label>
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
