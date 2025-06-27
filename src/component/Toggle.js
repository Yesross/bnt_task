// Create a component with a button. On each click, toggle between "Hello"
// and "Welcome Back" using useState
import React, { useState } from "react";

function Toggle() {
  const [showHello, setShowwelcome] = useState(true);
  

  return (
    <div>
      <p>{showHello ? "Hello" : "Welcome Back"}</p>
      <button onClick={() => setShowwelcome(!showHello)}>Toggle</button>
    </div>
  );
}

export default Toggle;