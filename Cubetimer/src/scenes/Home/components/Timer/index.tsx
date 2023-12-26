import "./style.css";

export default function Timer() {
  return (
    <div className="timer">
      <p className="timer__title">Cubetimer</p>
      <p className="timer__display-time">00:00.00</p>
      <p className="timer__description">
        Press your <span>Spacebar</span> to start/stop.
      </p>
    </div>
  );
}
