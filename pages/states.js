import React from "react";

function states() {
  return (
    <>
      <h1 className="text-2xl font-bold bg-b text-white text-center mt-5 py-2 px-4 rounded">
        Handling Hover, Focus, and Other States
      </h1>
      <div className="flex justify-center gap-10 mt-10">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          This is button A.
        </button>
        <button className="bg-violet-500 hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white font-bold py-2 px-4 rounded">
          This is button B.
        </button>
      </div>
    </>
  );
}

export default states;
