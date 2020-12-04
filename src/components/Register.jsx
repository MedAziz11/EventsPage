import React from "react";
import Input from "./Input";
import useRegister from "./useRegister";

const Register = () => {
  const { handleChange, values, errors } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("button").click();
  };
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
