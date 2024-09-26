import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="h-screen w-full flex flex-col items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <div className="space-x-4 bg-gray-100 p-6 rounded-sm">
          <button
            className="px-4 py-2 bg-red-500 text-white font-bold rounded hover:bg-red-600 transition duration-300"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white font-bold rounded hover:bg-green-600 transition duration-300"
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 transition duration-300"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition duration-300"
            onClick={() => setColor("yellow")}
          >
            Yellow
          </button>
          <button
            className="px-4 py-2 bg-pink-500 text-white font-bold rounded hover:bg-pink-600 transition duration-300"
            onClick={() => setColor("pink")}
          >
            Pink
          </button>
          <button
            className="px-4 py-2 bg-black text-white font-bold rounded hover:bg-gray-800 transition duration-300"
            onClick={() => setColor("black")}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
