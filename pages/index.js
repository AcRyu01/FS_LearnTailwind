export default function Utility() {
  return (
    <>
      <h1 className="text-2xl font-bold bg-b text-white text-center mt-5 py-2 px-4 rounded">
        Utility-First Fundamentals
      </h1>
      <div className="flex justify-center mt-10">
        <div className="p-6 max-w-sm mx-auto bg-slate-300 rounded-xl shadow-lg flex items-center space-x-4">
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-slate-600">You have a new message!</p>
          </div>
        </div>
      </div>
    </>
  );
}
