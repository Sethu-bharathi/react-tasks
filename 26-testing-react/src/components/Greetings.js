import { useState } from "react";
import Output from "./OUtput";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <Output>It's good to see you</Output>}
      {changedText && <p>Changed text</p>}
      <button onClick={changeTextHandler}>change Text</button>
    </div>
  );
};

export default Greeting;
