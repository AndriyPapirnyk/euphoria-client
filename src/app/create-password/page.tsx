"use client"
import "../login/page.scss"
import Image from 'next/image'
import backgroundImage from '../../../public/background/creatingBackground.png'
import hideIcon from '../../../public/icons/hide.png'
import eye from '../../../public/icons/eye.svg';
import Button from '../components/button/Button'
import { useState } from 'react';

export default function page() {

 const [password, setpassword] = useState<string>("")
 const [confirmPassword, setconfirmPassword] = useState<string>("")
 const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
 const [doMatch, setdoMatch] = useState<any>(null)
    
    const togglePassword = () => {
        const input = document.getElementById('signInPassword') as HTMLInputElement | null;
        if (input) {
            input.type = isPasswordVisible ? 'password' : 'text';
            setIsPasswordVisible(!isPasswordVisible);
        }
    };    

    const checkPasswords = () => {
        if (password !== confirmPassword) {
            setdoMatch(false);
        } else {
            setdoMatch(true);
        }
    }

  return (
    <div className='login'>
        <div className="login__illustration">
            <Image src={backgroundImage} alt="Login Illustration" style={{ height: "100%", width: "auto"}}/>
        </div>
        <div className="login__content">
            <div className="login__content-holder">
            <h1>Create New Password</h1>
            <form action="POST" className="login__content-form">
                <div className="input-group">
                    <p>Password 
                    <span onClick={togglePassword} style={{ cursor: 'pointer' }}>
                        <Image src={isPasswordVisible ? eye  : hideIcon} alt='toggle password visibility' style={{ width: "20px", height: "20px" }} />
                        {isPasswordVisible ? 'Hide' : 'Show'}
                    </span>
                    </p>
                    <input onChange={(e) => setpassword(e.target.value)} value={password} type={isPasswordVisible ? 'text' : 'password'} />                    
                    </div>
                <div className="input-group">
                  <p>Confirm Password</p>
                  <input onChange={(e) => setconfirmPassword(e.target.value)} value={confirmPassword} type={isPasswordVisible ? 'text' : 'password'} />                    
                  {doMatch === false && <p style={{color: "red"}}>New password and comfirm new password do not match</p>}
                </div>
                <div onClick={checkPasswords} className="login__content-button">
                    <Button text={'Reset Password'} buttonStyle={1} />
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

