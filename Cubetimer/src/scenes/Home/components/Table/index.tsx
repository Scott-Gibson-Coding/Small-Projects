import "./style.css";

export default function Table() {
  const times = [5.55, 6.66, 7.77];
  return (
    <div className="card">
      <p>Time Log for</p>
      <p className="card__focus">Rubik's Cube</p>
      <table className="table">
        {times.map((time, index) => {
          return (
            <tr className="table-row">
              <td>{times.length - index}.</td>
              <td>{time}</td>
              <a href="">x</a>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
