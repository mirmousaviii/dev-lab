// React useEffect Cleanup Function Example

import { useEffect, useState } from "react";

function TimerComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    // Cleanup function runs when the component unmounts
    return () => {
      clearInterval(interval);
      console.log("Cleanup: Timer stopped");
    };
  }, []);

  return <div>Count: {count}</div>;
}

export default TimerComponent;
