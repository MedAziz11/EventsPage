import { useState } from "react";

const useRegister = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({...values ,[name]: value });
  };

  return {handleChange, values}
};

export default useRegister;
