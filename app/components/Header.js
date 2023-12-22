import React from "react";
import { FaInfinity, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className="w-full bg-gray-800 text-white px-5 py-3 mb-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-center gap-5">
            <div className="text-3xl font-bold">
              <p>manga.</p>
            </div>
            <p className="cursor-pointer hover:opacity-55   ease-in delay-200">
              Search
            </p>
            <p className="cursor-pointer hover:opacity-55   ease-in delay-200">
              Missing Manga
            </p>
            <p className="cursor-pointer hover:opacity-55   ease-in delay-200">
              Recent Chapter
            </p>
            <p className="cursor-pointer hover:opacity-55   ease-in delay-200">
              Contact
            </p>
            <p className="cursor-pointer hover:opacity-55   ease-in delay-200">
              Anime Memes
            </p>
            <p className="cursor-pointer hover:opacity-55   ease-in delay-200">
              New Mangas
            </p>
          </div>

          <div className="flex items-center justify-center gap-5">
            <FaInfinity size={25} />

            <div class="relative flex  flex-col justify-center overflow-hidden ">
              <div class="relative rounded-full text-black bg-slate-200  shadow-xl ring-1 ring-gray-900/5 ">
                <div class="mx-auto max-w-md">
                  <form action="" class="relative mx-auto w-max">
                    <input
                      type="search"
                      class="peer cursor-pointer relative z-10 h-10 w-5 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-black "
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
