//1. Create a component with a button that increases a count value using useState. Display the count on the screen.
// 2. Implement a counter that increases on click and resets to 0 if it reaches
import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    if (count >= 10) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  

  return (
    <div>
      <h2>Counter (Resets at 10)</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default Counter;