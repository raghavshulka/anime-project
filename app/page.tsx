import Homecard from "./components/Homecard.js";
import Trendingmanga from "./components/Trendingmangs.js";
import Newchapter from "./components/Newchapter.js";
import ChapterSelection from "./components/ChapterSelection.js"

export default function Home() {
  return (
    <div className="w-full scroll-smooth">
      {/* <Homecard />
      <Newchapter />
      <div className="flex justify-center w-full">
        <button className="bg-blue-700 text-white rounded-md px-4 py-3">
          View More Latest Chapter
        </button>
      </div>
      <Trendingmanga /> */}

      {/* for chapter selection part */}
      <ChapterSelection/>


      <footer className=" pt-3">
        <hr />
        <p className=" text-slate-400 py-5 flex justify-center items-center">
          Mangapill
        </p>
      </footer>
    </div>
  );
}
