import React from "react";
import Child from "./Child";

function Parent(props) {
  return (
    <div>
      <h3>Parent</h3>
      <Child message={props.message} />
    </div>
  );
}

export default Parent;