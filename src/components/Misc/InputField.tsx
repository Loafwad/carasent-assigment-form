interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: "mail" | "firstName" | "lastName" /* | ect... */;
  error: string;
  required: boolean;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const InputField = ({ label, onChange, placeholder, type, error, required }: InputFieldProps) => {
  return (
    <div className="flex  flex-col space-y-2">
      <label className={`text-white text-opacity-60 `}>{label}</label>
      <input
        name={type}
        required={required}
        onChange={(e) => onChange(e)}
        onPaste={(e) => onChange(e)}
        onInvalid={(e) => {
          e.currentTarget.setCustomValidity(error);
        }}
        placeholder={placeholder}
        className={`bg-white text-black p-2 rounded-sm ${error && "ring-2 ring-primary"} `}
      />
      {error && <p className="text-primary">{error} *</p>}
    </div>
  );
};

export default InputField;
