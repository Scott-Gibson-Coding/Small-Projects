import { useState } from "react";
import "./App.css";
import { useRef } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef();

  const decreaseCount = () => {
    setCount((count) => count - 1);
  };
  const increaseCount = () => {
    setCount((count) => count + 1);
  };
  const resetCount = () => {
    setCount(0);
  };

  useEffect(() => {
    const colors = {
      default: "rgb(0 0 0)",
      green: "rgb(0 200 80)",
      red: "rgb(200 0 80)",
    };
    if (count > 0) {
      countRef.current.style.color = colors.green;
    } else if (count < 0) {
      countRef.current.style.color = colors.red;
    } else {
      countRef.current.style.color = colors.default;
    }
  }, [count]);

  return (
    <>
      <main>
        <div className="counter">
          <h1>Counter</h1>
          <p ref={countRef}>{count}</p>
        </div>
        <div className="buttons">
          <button onClick={decreaseCount}>Decrease</button>
          <button onClick={resetCount}>Reset</button>
          <button onClick={increaseCount}>Increase</button>
        </div>
      </main>
    </>
  );
}

export default App;
