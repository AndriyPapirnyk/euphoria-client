import Image from 'next/image'
import './page.scss'
import backgroundImage from '../../../public/background/loginBackground.png'
import hideIcon from '../../../public/icons/hide.png'
import Button from '../components/button/Button'
import GoogleIcon from '../../../public/icons/google.png';
import FacebookIcon from '../../../public/icons/facebook.png';
import Link from 'next/link'

const LogIn: React.FC = () => {
  return (
    <div className='login'>
        <div className="login__illustration">
            <Image src={backgroundImage} alt="Login Illustration" style={{ height: "100%"}}/>
        </div>
        <div className="login__content">
            <div className="login__content-holder">
            <h1>Sign In Page</h1>
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
            <form action="POST" className="login__content-form">
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
                    <div>
                        <a href="">Forget your password</a>
                    </div>
                </div>
                <div className="login__content-button">
                    <Button text={'Sign In'} buttonStyle={1} />
                    <p>Don't have an account? <Link href={'/SignIn'}>Sign Up</Link></p>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default LogIn;