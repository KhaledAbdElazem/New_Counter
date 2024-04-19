import Style from "../css/counter.module.css";
import PropTypes from "prop-types";
import { useState } from "react";
function Counter(props) {
  const { counterNum } = props;
  const [counter, setCounter] = useState(0);

  const inc = () => setCounter((prevCount) => prevCount + 1);
  const dec = () => setCounter((prevCount) => prevCount - 1);

  return (
    <div className={Style.counter}>
      <p>Counter {counterNum ? counterNum : 0}</p>
      <button onClick={inc}>+</button>
      <p>{counter}</p>
      <button onClick={dec}>-</button>
    </div>
  );
}
Counter.propTypes = {
  counterNum: PropTypes.number,
};

export default Counter;
