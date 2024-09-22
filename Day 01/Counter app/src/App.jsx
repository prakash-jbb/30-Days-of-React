import { useState } from "react";

function App() {
  let [counter, setCounter] = useState(0);

  function addValue() {
    if (counter < 20) {
      setCounter((counter = counter + 1));
    } else {
      alert("You cross the limit of increase the number");
    }
  }
  function removeValue() {
    if (counter > 0) {
      setCounter((counter = counter - 1));
    } else {
      alert("You cross the limit of decrease the number");
    }
  }

  return (
    <>
      <h1>Counter : {counter}</h1>
      <button onClick={addValue}>+</button>
      <button onClick={removeValue}>-</button>
    </>
  );
}

export default App;
