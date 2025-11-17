import React, { useState } from "react";
import './index.css'

const ValidForm = () => {
  const [formData, setFromData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const error = {};

    if (!formData.username.trim()) {
      error.username = "Username Required";
    }
    if (!formData.email) {
      error.email = "Email Required";
    }
    if (!formData.password) {
      error.password = "Password Required";
    }
    return error;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validate();

    if (Object.keys(validationErrors).length == 0) {
      console.log("success");
    } else {
      setErrors(validationErrors);
    }
    console.log(formData);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFromData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        {errors.username && <p className="error">{errors.username}</p>}
        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="text"
          name="password"
          placeholder="Enter PassWord"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ValidForm;
