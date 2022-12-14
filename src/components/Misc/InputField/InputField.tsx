interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: "mail" | "firstName" | "lastName" /* | ect... */;
  error: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  pattern?: RegExp;
  required: boolean;
}

const InputField = ({ label, onChange, required, placeholder, type, error, pattern }: InputFieldProps) => {
  return (
    <div className="flex  flex-col space-y-2">
      <label className={`text-white text-opacity-60 `}>{label}</label>
      <input
        name={type}
        required={required}
        pattern={pattern ? pattern.source : undefined}
        onChange={(e) => onChange(e)}
        onPaste={(e) => onChange(e)}
        onCut={(e) => onChange(e)}
        onInvalid={(e) => {
          e.currentTarget.setCustomValidity(error);
        }}
        onInput={(e) => e.currentTarget.setCustomValidity("")}
        placeholder={placeholder}
        className={`bg-white text-black p-2 rounded-sm ${error && "ring-2 ring-primary"} `}
      />
      {error && <p className="text-primary">{error} *</p>}
    </div>
  );
};

export default InputField;
