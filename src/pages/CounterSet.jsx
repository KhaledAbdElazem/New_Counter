import Counter from "../components/counter.jsx";
import Style from "./css/counterSet.module.css";
function CounterSet() {
  return (
    <>
      <div className={Style.counters}>
        <h2>All Counters</h2>
        <Counter counterNum={1} />
        <Counter counterNum={2} />
        <Counter counterNum={3} />
      </div>
    </>
  );
}

export default CounterSet;
