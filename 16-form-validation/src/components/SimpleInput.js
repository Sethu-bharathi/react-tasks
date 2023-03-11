import { useState, useEffect } from "react";
import useInput from "../Hooks/use-input";

const SimpleInput = (props) => {
  const [enterNameTouched, setenterNameTouched] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const {
    value: userName,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((text) => text.trim() !== "");
  const {
    value: email,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    blurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((text) => text.trim() !== "");

  useEffect(() => {
    if (!nameHasError) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [nameHasError]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (userName.trim() === "") {
      return;
    }
    nameReset();
    emailReset();
  };

  const inputClasses = `form-control ${nameHasError ? "invalid" : ""}`;
  return (
    <form onSubmit={submitHandler}>
      <div className={inputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          value={userName}
          onBlur={nameBlurHandler}
        />
        {emailHasError && <p className="error-text">Input cannot be empty</p>}
        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          value={email}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Input cannot be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
