import React from "react";

function dark() {
  return (
    <>
      <h1 className="text-2xl font-bold bg-b text-white text-center mt-5 py-2 px-4 rounded">
        Dark Mode
      </h1>
      <div className="flex justify-center gap-10 mt-10">
        <div className=" bg-purple-500 h-60 w-60 dark:rounded-xl rounded-full " />
      </div>
    </>
  );
}

export default dark;
