'use client'
import "./Header.scss"
import Image from "next/image"
import logo from "../../../../public/icons/logo.png"
import searchIcon from "../../../../public/icons/search.png"
import cartIcon from "../../../../public/icons/cart.png"
import heartIcon from "../../../../public/icons/heart.png"
import profileIcon from "../../../../public/icons/profile.png"
import Button from "../button/Button"
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import { usePathname } from "next/navigation"
import Link from "next/link"


export default function Header() {

  const pathname = usePathname();

  

  useEffect(()=>{
    console.log(pathname);
  },[])

  return (
    <header className="header">
        <div className="header__logo"> 
            <Image src={logo} alt="Logo" width={130} height={40}/>
        </div>
        {(pathname == '/login' || pathname == '/signin') ? <nav className="header__nav">
            <Link href={'/login'}>
              <Button text={'Login'} buttonStyle={pathname == '/login' ? 1 : 2} />
            </Link>
            <Link href={'/signin'}>
              <Button text={'Sign Up'} buttonStyle={pathname == '/signin' ? 1 : 2} />
            </Link>
        </nav> : null}
        {pathname == '/' ? (
          <div className="header__content">
           <ul>
              <li className="header__content-li_active">Shop</li>
              <li className="header__content-li" >Men</li>
              <li className="header__content-li">Women</li>
              <li className="header__content-li">Combos</li>
              <li className="header__content-li">Joggers</li>
           </ul>
           <div className="header__content-search">
              <Image src={searchIcon} width={20} height={20} alt="search button"></Image>
              <input type="text" className="" placeholder="Search" />
           </div>
           <div className="header__content-buttons">
             <div>
               <Image src={heartIcon} width={25} height={25} alt="heart"></Image>
             </div>
             <div>
               <Image src={profileIcon} width={25} height={25} alt="profile"></Image>
             </div>
             <div>
               <Image src={cartIcon} width={25} height={25} alt="cart"></Image>
             </div>        
            </div>
          </div>
        )
        : null}
    </header>
  )
}
