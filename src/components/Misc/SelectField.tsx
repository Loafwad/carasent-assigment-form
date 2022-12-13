import React from "react";

interface SelectProps {
  label: string;
  placeholder: string;
  options: string[];
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  type: string;
}

const Select = ({ label, placeholder, options, onChange, type }: SelectProps) => {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-white text-opacity-60">{label}</label>
      <select
        onChange={(e) => onChange(e)}
        name={type}
        defaultValue={placeholder}
        className="text-black text-opacity-60 bg-white p-2 rounded-sm"
      >
        <option value={placeholder} disabled>
          {placeholder}
        </option>
        {options.map((option, index) => (
          <option key={index}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
