import React from "react";
import Parent from "./Parent";

function GrandParent() {
  const message = "Hello from GrandParent";
  return (
    <div>
      <h2>GrandParent</h2>
      <Parent message={message} />
    </div>
  );
}

export default GrandParent;