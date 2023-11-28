export default function Results({ stringList }) {
  return (
    <div className="container max-w-2xl overflow-auto mx-auto p-4 bg-emerald-200 rounded border-solid border-4 border-cyan-600">
      <h1 className="text-3xl right-0 text-center font-bold m3-4">
        Your Random Strings
      </h1>
      <ul className="ml-6">
        {stringList.map((string, _id) => (
          <li className="py-2 font-mono" key={_id}>
            {string}
          </li>
        ))}
      </ul>
    </div>
  );
}
