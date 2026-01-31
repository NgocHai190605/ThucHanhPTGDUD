import { useEffect, useState } from "react";
function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return (
    <div>
      <h2>Digital Clock</h2>
      <h3>{time.toLocaleTimeString()}</h3>
    </div>
  );
}
export default DigitalClock;
