import { useState, useEffect } from "react";

// import components
import Header from "./Components/Header";
import Form from "./Components/Form";
import Results from "./Components/Results";

// util functions
import { generateAlphanumericStrings } from "./Utils/Random";

export default function App() {
  const [stringList, setStringList] = useState([]);

  const requestNewStrings = ({ stringLength, numStrings }) => {
    setStringList(generateAlphanumericStrings(stringLength, numStrings));
  };

  return (
    <div
      className="absolute w-screen h-screen py-10 flex flex-col 
                    gap-6 bg-emerald-400 text-lg text-cyan-950"
    >
      <Header />
      <Form callback={requestNewStrings} />
      <Results stringList={stringList} />
    </div>
  );
}
