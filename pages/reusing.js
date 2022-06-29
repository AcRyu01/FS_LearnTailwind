import React from "react";

function reusing() {
  const Button = ({ color = "success", children }) => {
    // Good
    const bgColor = color === "success" ? "bg-green-400" : "bg-red-400";
    // Bad
    // const bgColor = `bg-${color === "success" ? "green" : "red"}-400`;
    return (
      <button className={`py-1 px-2 ${bgColor} text-white rounded`}>
        {children}
      </button>
    );
  };

  return (
    <>
      <h1 className="text-2xl font-bold bg-b text-white text-center mt-5 py-2 px-4 rounded">
        Reusing Styles
      </h1>
      <div className="flex justify-center flex-col gap-10 mt-10">
        {/* ----------------------------- Case : A --------------------------------------- */}
        <div className="flex justify-center flex-row gap-10 ">
          <h2>Normal className: </h2>
          <button className="py-1 px-2 bg-green-400 text-white rounded">
            Pfizer
          </button>
          <button className="py-1 px-2 bg-green-400 text-white rounded">
            Moderna
          </button>
          <button className="py-1 px-2 bg-green-400 text-white rounded">
            Astrazeneca
          </button>
        </div>

        {/* ----------------------------- Case : B --------------------------------------- */}
        <div className="flex justify-center flex-row gap-10 ">
          <h2>Extracting classes with @apply: </h2>
          <button className="btn">Pfizer</button>
          <button className="btn">Moderna</button>
          <button className="btn">Astrazeneca</button>
        </div>

        {/* ----------------------------- Case : C --------------------------------------- */}
        <div className="flex justify-center flex-row gap-10 ">
          <h2>Extracting components and partials: </h2>
          <Button>Pfizer</Button>
          <Button>Moderna</Button>
          <Button>Astrazeneca</Button>
        </div>

        {/* ----------------------------- Case : D --------------------------------------- */}
        <div className="flex justify-center flex-row gap-10 ">
          <h2>Dynamic class: </h2>
          <Button>Pfizer</Button>
          <Button>Moderna</Button>
          <Button>Astrazeneca</Button>
          <Button color="danger">Sinovac</Button>
        </div>
      </div>
    </>
  );
}

export default reusing;
