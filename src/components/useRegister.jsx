import { useState } from "react";

const useRegister = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({[name]: value });
    console.log(values)
  };

  return {handleChange, values, errors}
};

export default useRegister;
