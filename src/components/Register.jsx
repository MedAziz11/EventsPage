import React from "react";
import Input from "./Input";
import useRegister from "./useRegister";

import api from "../api";

const Register = () => {
  const { handleChange, values } = useRegister();

  const registerUser = async (payload) =>{
    return await api.post("/users/", payload)
  }

  function handleSubmit(e) {
    e.preventDefault();
    const response = registerUser(values);
    console.log(response);
    document.getElementById("button").click();
  }

  return (
    <form
      className="animate__animated animate__fadeInUp"
      onSubmit={handleSubmit}
    >
      <Input
        placeholder="Full Name"
        type="text"
        name="fullname"
        value={values.fullname}
        onChange={handleChange}
      />
      <button type="submit" className="fa fa-paper-plane-o submit"></button>
      <Input
        placeholder="Email"
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
    </form>
  );
};

export default Register;
