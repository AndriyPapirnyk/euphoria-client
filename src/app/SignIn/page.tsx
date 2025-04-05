'use client';
import './page.scss';
import Button from '../components/button/Button';
import Image from 'next/image';
import backgroundImage from '../../../public/background/SignInBack.png';
import hideIcon from '../../../public/icons/hide.png';
import eye from '../../../public/icons/eye.svg';
import GoogleIcon from '../../../public/icons/google.png';
import FacebookIcon from '../../../public/icons/facebook.png';
import Link from 'next/link';
import { useState } from 'react';

const SignIn: React.FC = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    
    const togglePassword = () => {
        const input = document.getElementById('signInPassword') as HTMLInputElement | null;
        if (input) {
            input.type = isPasswordVisible ? 'password' : 'text';
            setIsPasswordVisible(!isPasswordVisible);
        }
    };

    return(
          <div className='signIn'>
                <div className="signIn__illustration">
                    <Image src={backgroundImage} alt="Login Illustration" style={{ height: "100%", width: "auto"}} />
                </div>
                <div className="signIn__content">   
                  <div className="signIn__content-holder">
                    <div className='signIn__content-tittle'>
                      <h1>Sign Up</h1>
                      <p>Sign up for free to access to in any of our products </p>
                    </div>
                    <div className="signIn__content-buttons">
                        <button>
                            <Image src={GoogleIcon} width={30} height={30} style={{margin: '0 10px'}} alt='google icon'></Image>
                            Continue With Google</button>
                        <button>
                            <Image src={FacebookIcon} width={30} height={30} style={{margin: '0 10px'}} alt='facebook icon'></Image>
                            Continue With Facebook
                        </button>
                    </div>
                    <div className="line">
                        <div>OR</div>
                    </div>
                    <form action="POST" className="signIn__content-form">
                        <div className="input-group">
                            <p>User name or email address 
                            </p>
                            <input type="text"/>
                        </div>
                        <div className="input-group">
                            <p>Password
                                <span onClick={togglePassword} style={{ cursor: 'pointer' }}>
                                    <Image src={isPasswordVisible ? eye  : hideIcon} alt='toggle password visibility' style={{ width: "20px", height: "20px" }} />
                                    {isPasswordVisible ? 'Hide' : 'Show'}
                                </span>
                            </p>
                            <input type={isPasswordVisible ? 'text' : 'password'} id='signInPassword' />
                        </div>
                         <div className="signIn__content-button">
                            <Button text={'Sign Up'} buttonStyle={1} />
                             <p>Already have account <Link href={'/login'}>Log In</Link></p>
                          </div>
                    </form>
                    </div>
                </div>
            </div>
    )
}

export default SignIn;