'use client'
import "./Header.scss"
import Image from "next/image"
import logo from "../../../../public/icons/logo.png"
import Button from "../button/Button"
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import { usePathname } from "next/navigation"
import Link from "next/link"


export default function Header() {

  const [signKey, setSignKey] = useState<boolean>(false);
  const pathname = usePathname();

  

  useEffect(()=>{
    console.log(pathname);
  },[])

  return (
    <header className="header">
        <div className="header__logo"> 
            <Image src={logo} alt="Logo" width={130} height={40}/>
        </div>
        <nav className="header__nav">
            <Link href={'/login'}>
              <Button text={'Login'} buttonStyle={pathname == '/LogIn' ? 1 : 2} />
            </Link>
            <Link href={'/signIn'}>
              <Button text={'Sign Up'} buttonStyle={pathname == '/SignIn' ? 1 : 2} />
            </Link>
        </nav>
    </header>
  )
}
