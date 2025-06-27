import React, { useState } from "react";

function LoginForm() {
  const [inputs, setInputs] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Logged in!");
  };

  const isDisabled = !inputs.username || !inputs.password;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          name="username"
          type="text"
          placeholder="Username"
          value={inputs.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={inputs.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={isDisabled}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;