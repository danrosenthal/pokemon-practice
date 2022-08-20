import React from "react";
import SwitchRender from "../../components/SwitchRender/SwitchRender";

import styles from "./Home.module.css";

export default function Home() {
  const data = {
    falsy: false,
    array: [1, 2, 3],
    other: "hello"
  };

  return (
    <div className={styles.Home}>
      <SwitchRender data={data.falsy} />
      <SwitchRender data={data.array} />
      <SwitchRender data={data.other} />
    </div>
  );
}
