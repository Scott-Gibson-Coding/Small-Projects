import { useState } from "react";

export default function Form({ callback }) {
  // num input states
  const [stringLength, setStringLength] = useState(15);
  const [numStrings, setNumStrings] = useState(1);
  // checkbox states
  const [uppercaseCheck, setUppercaseCheck] = useState(false);
  const [uniqueCharactersCheck, setUniqueCharactersCheck] = useState(false);
  const [uniqueStringsCheck, setUniqueStringsCheck] = useState(false);

  const formSubmit = (e) => {
    e.preventDefault();
    callback({
      stringLength,
      numStrings,
      uppercaseCheck,
      uniqueCharactersCheck,
      uniqueStringsCheck,
    });
  };

  return (
    <div className="container max-w-2xl mx-auto p-4 bg-emerald-200 rounded border-solid border-4 border-cyan-600">
      <div className="flex flex-col">
        <div className="my-4 ml-auto">
          <label htmlFor="string-length-input" className="font-bold px-4">
            String length
          </label>
          <input
            type="number"
            id="string-length-input"
            className="form-input w-36 p-1 px-4 text-lg text-right rounded"
            value={stringLength}
            min="1"
            max={uniqueCharactersCheck ? "36" : "99"}
            onChange={(e) => setStringLength(e.target.value)}
          />
        </div>

        <div className="my-4 ml-auto">
          <label htmlFor="num-strings-input" className="font-bold px-4">
            Number of strings
          </label>
          <input
            type="number"
            id="num-strings-input"
            className="form-input w-36 p-1 px-4 text-lg text-right rounded"
            value={numStrings}
            min="1"
            max="99"
            onChange={(e) => setNumStrings(e.target.value)}
          />
        </div>

        <div className="flex flex-col justify-center w-[60%] mx-auto">
          <div>
            <input
              className="mr-4"
              type="checkbox"
              id="uppercase-checkbox"
              checked={uppercaseCheck}
              onChange={() => setUppercaseCheck(!uppercaseCheck)}
            />
            <label htmlFor="uppercase-checkbox">Output in uppercase</label>
          </div>
          <div>
            <input
              className="mr-4"
              type="checkbox"
              id="unique-characters-checkbox"
              checked={uniqueCharactersCheck}
              onChange={() => {
                setUniqueCharactersCheck(!uniqueCharactersCheck);
                setStringLength(Math.min(36, stringLength));
              }}
            />
            <label htmlFor="unique-characters-checkbox">
              Unique characters in string
            </label>
          </div>
          <div>
            <input
              className="mr-4"
              type="checkbox"
              id="unique-strings-checkbox"
              checked={uniqueStringsCheck}
              onChange={() => setUniqueStringsCheck(!uniqueStringsCheck)}
            />
            <label htmlFor="unique-strings-checkbox">Unique strings only</label>
          </div>
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
