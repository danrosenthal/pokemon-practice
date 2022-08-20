import React, { useState, useEffect } from "react";

import styles from "./Clock.module.css";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  const tick = () => {
    setTime(new Date());
  };

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.Clock}>
      <time dateTime={time?.toLocaleTimeString()}>
        {time?.toLocaleTimeString()}
      </time>
    </div>
  );
}
