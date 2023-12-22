import React from "react";
import { FaInfinity } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <div className=" w-full flex justify-between items-center px-5 py-6 ">
        <div className=" font-normal  text-[15px] flex justify-center items-center gap-5">
          <div className="   text-3xl">
            <p>manga</p>
          </div>
          <p>Search</p>
          <p>New Mangas</p>
          <p>Recent Chapter</p>
          <p>Missing Manga</p>
          <p>Contact</p>
          <p>Anime Memes</p>
        </div>

        <div className=" font-normal  text-[15px]  flex justify-center items-center gap-5">
          <FaInfinity />
          <FaSearch />
          <button>switch</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
