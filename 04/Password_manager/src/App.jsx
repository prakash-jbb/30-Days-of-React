import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-lg rounded-xl p-6 my-10 bg-gray-900 text-yellow-400">
        <h1 className="text-white text-2xl font-bold text-center mb-6">
          Password Generator
        </h1>

        <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden shadow-sm mb-6">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-3 px-4 bg-gray-700 text-white"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 font-medium"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-white font-medium">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer w-3/4"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <label htmlFor="numberInput" className="text-white font-medium">
              Include Numbers
            </label>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              className="w-5 h-5 cursor-pointer accent-blue-600"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
          </div>

          <div className="flex justify-between items-center">
            <label htmlFor="characterInput" className="text-white font-medium">
              Include Characters
            </label>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              className="w-5 h-5 cursor-pointer accent-blue-600"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
