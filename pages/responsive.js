import React from "react";

function responsive() {
  return (
    <>
      <h1 className="text-2xl font-bold bg-b text-white text-center mt-5 py-2 px-4 rounded">
        Responsive Design
      </h1>
      <div className="flex justify-center gap-10 mt-10">
        <div className=" bg-purple-500 tablet:bg-green-500 laptop:bg-red-500 desktop:bg-yellow-500 h-60 w-60 rounded-full " />
      </div>
    </>
  );
}

export default responsive;
