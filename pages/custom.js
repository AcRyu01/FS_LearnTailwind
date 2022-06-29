import React from "react";

function custom() {
  return (
    <>
      <h1 className="text-2xl font-bold bg-b text-white text-center mt-5 py-2 px-4 rounded">
        Adding Custom Styles
      </h1>
      <div className="flex justify-center gap-10 mt-10">
        <div className=" bg-[#bada55] h-60 w-60 rounded-full " />
        <div className=" circle " />
      </div>
    </>
  );
}

export default custom;
