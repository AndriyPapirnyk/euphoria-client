import { ButtonProps } from "@/types"
import './Button.scss'

export default function Button({text, buttonStyle}: ButtonProps) {
  return (
    <button className={`button-${buttonStyle}`}>{text}</button>
  )
}

