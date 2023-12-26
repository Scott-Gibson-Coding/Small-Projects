import Timer from "./components/Timer";
import Table from "./components/Table";
import "./style.css";

export default function Home() {
  return (
    <>
      <section className="content">
        <Timer />
        <Table />
      </section>
    </>
  );
}
