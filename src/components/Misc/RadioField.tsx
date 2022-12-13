import React from "react";

interface RadioFieldProps {
  label: string;
  options: string[];
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  type: string;
}

const RadioField = ({ options, onChange, type }: RadioFieldProps) => {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="flex space-x-2">
          <label>{option}</label>
          <input onChange={(e) => onChange(e)} type="radio" id={option} name={type} value={option} />
        </div>
      ))}
    </div>
  );
};

export default RadioField;
