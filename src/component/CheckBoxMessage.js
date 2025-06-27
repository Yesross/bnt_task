import React, { useState } from "react";

function CheckBoxMessage() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <input
        type="checkbox"
        id="myCheckbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <label For="myCheckbox">Check me</label>
      {checked && <p>You checked the box!</p>}
    </div>
  );
}

export default CheckBoxMessage;