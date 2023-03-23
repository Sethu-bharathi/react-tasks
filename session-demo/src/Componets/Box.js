import styles from "./Box.module.css";
import { useState } from "react";
export default function Box() {
  const [isCliked, setisCliked] = useState(false);
  const clickHandler = () => {
    setisCliked((prev) => !prev);
  };
  return (
    <div
      onClick={clickHandler}
      className={!isCliked ? styles.box : styles.active}
    ></div>
  );
}
