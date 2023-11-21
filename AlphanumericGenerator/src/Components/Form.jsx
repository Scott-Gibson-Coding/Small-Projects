import { useState } from "react";

export default function Form({ callback }) {
  const [stringLength, setStringLength] = useState(15);
  const [numStrings, setNumStrings] = useState(1);

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(stringLength);
    console.log(numStrings);
  };

  return (
    <div className="container max-w-2xl mx-auto p-4 bg-emerald-200 rounded border-solid border-4 border-cyan-600">
      <div className="flex flex-col">
        <div className="my-4 ml-auto">
          <span className="font-bold px-4">String length</span>
          <input
            type="number"
            className="form-input w-36 p-1 px-4 text-lg text-right rounded"
            value={stringLength}
            min="1"
            max="99"
            onChange={(e) => setStringLength(e.target.value)}
          />
        </div>

        <div className="my-4 ml-auto">
          <span className="font-bold px-4">Number of strings</span>
          <input
            type="number"
            className="form-input w-36 p-1 px-4 text-lg text-right rounded"
            value={numStrings}
            min="1"
            max="99"
            onChange={(e) => setNumStrings(e.target.value)}
          />
        </div>

        <button
          className="w-full my-4 p-3 rounded bg-orange-400 text-emerald-100 text-xl font-semibold
                     hover:bg-orange-600 duration-300"
          onClick={formSubmit}
        >
          Generate Random Strings
        </button>
      </div>
    </div>
  );
}
