import { useState } from "react";
const useInput = (validateInput) => {
  const [enteredValue, setenteredValue] = useState("");
  const [isTouched, setisTouched] = useState(false);

  const isValid = validateInput(enteredValue);
  const hasError = !isValid && isTouched;

  const valueChangeHandler = (event) => {
    setenteredValue(event.target.value);
  };
  const blurHandler = () => {
    setisTouched(true);
  };
  const reset=()=>{
    setenteredValue("")
    setisTouched(false)
  }
  return {
    isValid,
    value: enteredValue,
    hasError,
    blurHandler,
    valueChangeHandler,
    reset
  };
};

export default useInput;
