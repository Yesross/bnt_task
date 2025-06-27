// Given an array of names: ["John", "Jane", "Alex"], render each name inside
// a list (<ul><li>) using .map() in JSX.
import React from "react";

function NameList() {
  const names = ["John", "Jane", "Alex"];
  return (
    <ul>
      {names.map((name, x) => (
        <li key={x}>{name}</li>
      ))}
    </ul>
  );
}

export default NameList;