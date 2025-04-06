import "../login/page.scss"
import backgroundImage from '../../../public/background/verificationBackground.png'
import Image from 'next/image'
import Button from '../components/button/Button'

export default function page() {
  return (
        <div className='login'>
        <div className="login__illustration">
            <Image src={backgroundImage} alt="Login Illustration" style={{ height: "100%", width: "auto"}}/>
        </div>
        <div className="login__content">
            <div className="login__content-holder">
            <h1>Verification</h1>
            <form method='POST' className="login__content-form">
              <div className="input-group">
                  <p>Verification Code</p>
                  <input type="email" style={{color: "#3C4242", border: "1px solid rgba(102, 102, 102, 0.8)"}} />                    
              </div>
            </form>
            <div className="login__content-button">
                    <Button text={'Verify Code'} buttonStyle={1} />
            </div>
            </div>
        </div>
    </div>
  )
}
