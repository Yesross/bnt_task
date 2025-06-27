// Create a ParentComponent and a ChildComponent. Pass the message
// "Good morning" as a prop from the parent to the child, and display it in the
// child component.


import React from "react";
import ChildComponent from "./ChildComponent";

function Parent() {
  return (
    <div>
      <h2>Parent Component</h2>
      <ChildComponent message="Good morning" />
    </div>
  );
}

export default Parent;