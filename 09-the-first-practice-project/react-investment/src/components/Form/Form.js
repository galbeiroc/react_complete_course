import { useState } from "react";

import classes from './Form.module.css';

const initialState = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  duration: 12,
}

const Form = ({ calculateHandler }) => {
  const [userInput, setUserInput] = useState(initialState);

  const onChangeHandler = ({ target: { name, value } }) => {
    setUserInput((prevState) => ({
      ...prevState,
      [name]: +value,
    }));
  };

  const onReset = () => {
    setUserInput(initialState);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    calculateHandler(userInput);
  }

  // console.log(userInput);

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            name="current-savings"
            value={userInput['current-savings']}
            onChange={onChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            name="yearly-contribution"
            value={userInput['yearly-contribution']}
            onChange={onChangeHandler}
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            name="expected-return"
            value={userInput['expected-return']}
            onChange={onChangeHandler}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={userInput['duration']}
            onChange={onChangeHandler}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button type="reset" className={classes.buttonAlt} onClick={onReset}>
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default Form;
