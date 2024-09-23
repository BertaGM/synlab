import { ReactNode } from "react";
import "./Button.css";
interface ButtonProps {
  text?: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = ({ text, icon, className, onClick }: ButtonProps) => {

  return (
    <button className={className} onClick={onClick}>
      {icon && <span>{icon}</span>}
      {text && <span>{text}</span>}
      </button>
  )

}

export default Button
