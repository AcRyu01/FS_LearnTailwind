import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="bg-s h-screen text-b text-xl">
      <Navbar />
      <div className="container mx-auto mt-[56px] mobile:mt-[90px] ">
        {children}
      </div>
    </div>
  );
}
