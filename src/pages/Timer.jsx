import { useState, useEffect } from "react";
import { createTimer } from "../system/timer";

export default function Timer() {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const timer = createTimer(seconds);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      timer.tick();
      setSeconds(timer.get());
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="card">
      <h2>Timer</h2>

      <input
        type="number"
        value={seconds}
        onChange={(e) => setSeconds(Number(e.target.value))}
      />

      <button onClick={() => setRunning(!running)}>
        {running ? "Pause" : "Start"}
      </button>
    </div>
  );
}
