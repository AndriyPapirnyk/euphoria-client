import React from 'react'
import "../login/page.scss"
import backgroundImage from '../../../public/background/resetBackground.png'
import Image from 'next/image'
import Button from '../components/button/Button'
import Link from 'next/link'

export default function page() {
  return (
        <div className='login'>
        <div className="login__illustration">
            <Image src={backgroundImage} alt="Login Illustration" style={{ height: "100%", width: "auto"}}/>
        </div>
        <div className="login__content">
            <div className="login__content-holder">
            <h1>Reset Your Password</h1>
            <p>Enter your email and we'll send you a link to reset your password. <br />Please check it.</p>
            <form method='POST' className="login__content-form">
              <div className="input-group">
                  <p>Email</p>
                  <input type="email" style={{color: "#8A33FD", border: "1px solid #8A33FD"}} />                    
                  <p>We can't find your email.</p>
              </div>
            </form>
            <div className="login__content-button">
                    <Button text={'Send'} buttonStyle={1} />
                    <p>Back to <Link href={'/login'}>Login</Link></p>
            </div>
            </div>
        </div>
    </div>
  )
}
