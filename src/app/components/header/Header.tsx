import "./Header.scss"
import Image from "next/image"
import logo from "../../../../public/icons/logo.png"
import Button from "../button/Button"

export default function Header() {
  return (
    <header className="header">
        <div className="header__logo">
            <Image src={logo} alt="Logo" />
        </div>
        <nav className="header__nav">
            <Button text={'Login'} buttonStyle={1} />
            <Button text={'Sign Up'} buttonStyle={2} />
        </nav>
    </header>
  )
}
