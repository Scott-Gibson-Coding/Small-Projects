// import components
import Header from "./Components/Header";
import Form from "./Components/Form";
import Results from "./Components/Results";

export default function App() {
  return (
    <div className="absolute w-screen h-screen lg:px-56 flex flex-col gap-6 bg-emerald-400 text-lg text-cyan-950">
      <Header />
      <Form />
      <Results />
    </div>
  );
}
