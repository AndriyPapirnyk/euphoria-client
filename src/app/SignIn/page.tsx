import './page.scss';
import Button from '../components/button/Button';
import Image from 'next/image';
import backgroundImage from '../../../public/background/SignInBack.png';
import hideIcon from '../../../public/icons/hide.png';
import GoogleIcon from '../../../public/icons/google.png';
import FacebookIcon from '../../../public/icons/facebook.png';
import Link from 'next/link';

const SignIn: React.FC = () => {
    return(
          <div className='signIn'>
                <div className="signIn__illustration">
                    <Image src={backgroundImage} alt="Login Illustration" />
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
                                 <span>
                                    <Image src={hideIcon} alt='hide icon' style={{ width: "18.19px", height: "16px"}} />
                                    Hide
                                </span>
                            </p>
                            <input type="text" />
                            Use 8 or more characters with a mix of letters, numbers & symbols
                        </div>
                        <div className="signIn__content-button">
                            <Button text={'Sign Up'} buttonStyle={1} />
                            <p>Already have an  account? <Link href={'/LogIn'}>Log In</Link></p>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
    )
}

export default SignIn;