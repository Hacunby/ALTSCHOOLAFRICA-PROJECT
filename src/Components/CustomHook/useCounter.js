import { useState } from "react";

import "./useCounter.css"
  
  
const useCounter = initialCount => {

    const [count, setCount] = useState(initialCount);
    
    return {
      value: count,
      increase: () => setCount(prevCount => prevCount + 1),
      decrease: () => setCount(prevCount => prevCount - 1),
      reset: () => setCount(initialCount)
    };
  };
  
function Counter({ initialCount }) {


    const counter = useCounter(initialCount);
    return (
      <div className="count-container">
        <h1>COSTOM HOOK COUNTER</h1>
        <h2>Count: {counter.value}</h2>
        <br />
        <br />
        <button onClick={counter.reset}>Reset</button>
        <button onClick={counter.increase}>+</button>
        <button onClick={counter.decrease}>-</button>
      </div>
    );
  }

  export default  Counter
  