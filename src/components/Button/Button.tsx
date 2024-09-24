import { ReactNode } from "react";
interface ButtonProps {
  text?: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button = ({ text, icon, className, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`p-4 bg-[#979a99] text-white rounded-lg flex items-center justify-center transition-colors duration-300 ease-in-out hover:bg-[#979a99] disabled:bg-gray-400 disabled:cursor-not-allowed ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {text && <span>{text}</span>}
    </button>
  );
};

export default Button;
