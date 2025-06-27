import React from "react";

function InputField({ label, placeholder, name, onChange }) {
  return (
    <div>
        <h2>reusable</h2>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;