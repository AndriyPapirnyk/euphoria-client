'use client'
import Image from 'next/image'
import './page.scss'
import backgroundImage from '../../../public/background/loginBackground.png'
import hideIcon from '../../../public/icons/hide.png'
import eye from '../../../public/icons/eye.svg';
import Button from '../components/button/Button'
import GoogleIcon from '../../../public/icons/google.png';
import FacebookIcon from '../../../public/icons/facebook.png';
import {signOut, signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { User } from '@/types'
import axios from 'axios'
import Cookies from 'js-cookie';


const LogIn: React.FC = () => {

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const session = useSession();
  const router = useRouter();
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [useremail, setUserEmail] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')

    const togglePassword = () => {
        const input = document.getElementById('signInPassword') as HTMLInputElement | null;
        if (input) {
            input.type = isPasswordVisible ? 'password' : 'text';
            setIsPasswordVisible(!isPasswordVisible);
        }
    };    

    const setUserSession = (user: boolean) => {
        Cookies.set('user', JSON.stringify(user), { expires: 7, path: '' });
    };

    const checkUserSession = () => {
        const user = Cookies.get('user');
        if (user) {
          return JSON.parse(user);
        }
        return null;
    };

    useEffect(() => {
            console.log(session)
        if(checkUserSession() === true){
            router.push('/');
        }else{
            if (session.status === 'authenticated') {
                const email = session.data?.user?.email ?? '';
                loginUser(email)
            }
        }
           
    }, [router,session.data]);



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const email = useremail;
        const password = userPassword;
        const result = await signIn("credentials", {
            redirect: false, 
            email,
            password,
          });
        
          if (result?.ok) {
            setUserSession(true)
            console.log("Login successful!");
            router.push("/");
          } else {
            alert( result?.error)
            console.log("Login error:", result?.error);
            setError(result?.error || "Unknown error");
          }
      }


    const loginUser = async (email: string) => {
        try{
            await axios.post(`${apiUrl}/auth/logIn/${email}`)
            .then((response) => {
                if(response.status === 201){
                    router.push('/');
                    setUserSession(true)
                }
            })
        }catch(error){
            if (axios.isAxiosError(error) && error.response) {
                if (error.response.status === 409) {
                  signOut({ redirect: false })
                  alert('Sorry but you need to provide a password to log in');
                }else if(error.response.status === 404){
                  await signOut({ redirect: false })
                  router.push('/signin');
                  alert('User with this email not found');
                } else {
                  console.log('Unexpected error:', error.response.data);
                }
              } else {
                console.error('Network error:',axios.isAxiosError(error) && error.message)
              }
        }
    }

  return (
    <div className='login'>
        <div className="login__illustration">
            <Image src={backgroundImage} alt="Login Illustration" style={{ height: "100%", width: "auto"}}/>
        </div>
        <div className="login__content">
            <div className="login__content-holder">
            <h1>Sign In Page</h1>
            <div className="login__content-buttons">
              <button onClick={() => signIn("google")} data-action='oauth'>
                <Image src={GoogleIcon} width={30} height={30} style={{margin: '0 10px'}} alt='google icon'></Image>
                Continue With Google
              </button>
              <button onClick={() => signIn("facebook")} data-action='oauth'>
                <Image src={FacebookIcon} width={30} height={30} style={{margin: '0 10px'}} alt='facebook icon'></Image>
                Continue With Facebook
              </button>
            </div>
            <div className="line">
                <div>OR</div>
            </div>
            <form action="POST" className="login__content-form" onSubmit={handleSubmit}>
                <div className="input-group">
                    <p>email address 
                       
                    </p>
                    <input type="text" value={useremail}  onChange={(e) => setUserEmail(e.target.value)}/>
                </div>
                <div className="input-group">
                  <p>Password
                    <span onClick={togglePassword} style={{ cursor: 'pointer' }}>
                        <Image src={isPasswordVisible ? eye  : hideIcon} alt='toggle password visibility' style={{ width: "20px", height: "20px" }} />
                        {isPasswordVisible ? 'Hide' : 'Show'}
                    </span>
                  </p>
                  <input type={isPasswordVisible ? 'text' : 'password'} id='signInPassword' value={userPassword}  onChange={(e) => setUserPassword(e.target.value)}/>                    
                  <div>
                    <Link href={'/reset-password'}>Forget your password</Link>
                  </div>
                </div>
                <div className="login__content-button">
                    <Button text={'Sign In'} buttonStyle={1} />
                    <p onClick={()=> signOut()}>Don't have an account? <Link href={'/signIn'}>Sign Up</Link></p>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default LogIn;

function setError(arg0: string) {
    throw new Error('Function not implemented.')
}
