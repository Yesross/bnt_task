import React, { useState } from "react";
import InputField from "./InputField";

function ExampleForm() {
  const [value, setValue] = useState("");

  return (
    <InputField
      label="Username"
      placeholder="Enter username"
      name="username"
      onChange={e => setValue(e.target.value)}
      />

  );
}
export default ExampleForm;
