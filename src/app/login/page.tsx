import Image from 'next/image'
import './page.scss'
import backgroundImage from '../../../public/background/loginBackground.png'
import hideIcon from '../../../public/icons/hide.png'
import Button from '../components/button/Button'

export default function page() {
  return (
    <div className='login'>
        <div className="login__illustration">
            <Image src={backgroundImage} alt="Login Illustration" style={{ height: "100%"}}/>
        </div>
        <div className="login__content">
            <div className="login__content-holder">
            <h1>Sign In Page</h1>
            <div className="login__content-buttons">
                <button>Continue With Google</button>
                <button>Continue With Facebook</button>
            </div>
            <div className="line">
                <div>OR</div>
            </div>
            <form action="POST" className="login__content-form">
                <div className="input-group">
                    <p>User name or email address 
                        <span>
                            <Image src={hideIcon} alt='hide icon' style={{ width: "18.19px", height: "16px"}} />
                            <p>Hide</p>
                        </span>
                    </p>
                    <input type="text"/>
                </div>
                <div className="input-group">
                    <p>Password</p>
                    <input type="text" />
                    <div>
                        <a href="">Forget your password</a>
                    </div>
                </div>
                <div className="login__content-button">
                    <Button text={'Sign In'} buttonStyle={1} />
                    <p>Don't have an account? <a href="/signup">Sign Up</a></p>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}
