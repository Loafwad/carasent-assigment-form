interface ButtonProps {
  label: string;
  primary?: boolean;
  type?: "button" | "submit" | "reset";
  callback?: () => void;
}

const Button = ({ label, primary, type, callback }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={callback}
      className={`py-2 px-6 rounded-sm w-full ${
        primary ? "bg-transparent ring-2 ring-primary ring-inset" : " bg-primary"
      }  hover:bg-opacity-60 hover:ring-opacity-60`}
    >
      {label}
    </button>
  );
};

export default Button;
