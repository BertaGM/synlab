import "./Button.css"
interface ButtonProps {
  text: string;

}

const Button = ({ text }: ButtonProps) => {

  return (
    <button className="button w-12 h-9">{text}</button>
  )

}

export default Button
