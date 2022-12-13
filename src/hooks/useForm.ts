import React, { useState } from "react";

export function useForm() {
  const [values, setValues] = useState({} as { [key: string]: string });

  const register = (name: string, required: { value: boolean; pattern?: RegExp; message: string }) => {
    return {
      name,
      onChange: (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
        handleChange(e);
      },
      value: values[name],
      required: required.value,
      pattern: required.pattern,
      error: values[name] ? "" : required.message,
    };
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement | HTMLSelectElement>) => {
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: any) => {
    console.table(values);
  };

  const reset = () => {
    setValues({});
  };

  return {
    handleSubmit,
    register,
    reset,
    values,
  };
}
