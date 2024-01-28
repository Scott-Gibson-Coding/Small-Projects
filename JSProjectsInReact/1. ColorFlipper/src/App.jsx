import { useEffect, useState } from "react";
import "./App.css";

function _getRandomColor() {
  const MAX_VALUE = 16 ** 6 - 1;
  return Math.floor(Math.random() * MAX_VALUE);
}

function App() {
  const [bgColor, setBgColor] = useState("f1f5f8");

  const handleClick = (e) => {
    e.preventDefault();
    const randomColor = _getRandomColor().toString(16);
    setBgColor(randomColor.padStart(6, "0"));
  };

  useEffect(() => {
    document.body.style.backgroundColor = `#${bgColor}`;
  }, [bgColor]);

  return (
    <>
      <header>
        <h1>Color Flipper</h1>
      </header>

      <main>
        <div className="wrapper">
          <p>
            Background Color: <span>#{bgColor}</span>
          </p>
          <button onClick={handleClick}>Click Me</button>
        </div>
      </main>
    </>
  );
}

export default App;
