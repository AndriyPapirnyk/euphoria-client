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
import { useSession } from 'next-auth/react';
import {signOut, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {User} from '../../types/index';
import Cookies from 'js-cookie';

const SignIn: React.FC = () => {

    const [username, setUsername] = useState<string>('')
    const [useremail, setUserEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
    const session = useSession();
    const router = useRouter();
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const togglePassword = () => {
        const input = document.getElementById('signInPassword') as HTMLInputElement | null;
        if (input) {
            input.type = isPasswordVisible ? 'password' : 'text';
            setIsPasswordVisible(!isPasswordVisible);
        }
    };

    const checkUserSession = () => {
        const user = Cookies.get('user');
        if (user) {
          return JSON.parse(user);
        }
        return null;
    };


    useEffect(() => {
        
        if(checkUserSession() === true){
            router.push('/');
        }else{
            if (session.status === 'authenticated') {
                const user: User = {
                    name: session.data?.user?.name ?? '',
                    email: session.data?.user?.email ?? '',
                    img: session.data?.user?.image ?? 'none',
                    type: 'oauth',
                    password: ''
                }
                createUser(user)
            }
        }
       
      }, [router,session.data]);

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      const user: User = {
        name: username,
        email: useremail,
        img: 'none',
        password: password,
        type: 'local'
        }
        createUser(user)
    }


    const createUser = async (user: User) => {
        try{
            await axios.post(`${apiUrl}/auth/signUp`, user)
            .then(async (response) => {
                if(response.status === 201){
                     await signOut({ redirect: false })
                     router.push('/login');
                }
            })
        }catch(error){
            if (axios.isAxiosError(error) && error.response) {
                if (error.response.status === 409) {
                  signOut({ redirect: false })
                  alert('User already exists');
                }else if(error.response.status === 404){
                    signOut({ redirect: false })
                  }  else {
                 alert( error.response.data.message[0])
                  console.log('Unexpected error:', error.response.data);
                }
              } else {
                console.error('Network error:',axios.isAxiosError(error) && error.message)
              }
        }
    }

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
                    <div className="signIn__content-buttons" >
                        <button onClick={() => signIn("google")} data-action='oauth'>
                            <Image src={GoogleIcon} width={30} height={30} style={{margin: '0 10px'}} alt='google icon'></Image>
                            Continue With Google</button>
                        <button onClick={() => signIn("facebook")} data-action='oauth'>
                            <Image src={FacebookIcon} width={30} height={30} style={{margin: '0 10px'}} alt='facebook icon'></Image>
                            Continue With Facebook
                        </button>
                    </div>
                    <div className="line">
                        <div>OR</div>
                    </div>
                    <form onSubmit={handleSubmit} action="POST" className="signIn__content-form">
                        <div className="input-group">
                            <p>User name 
                            </p>
                            <input type="text" value={username}  onChange={(e) => setUsername(e.target.value)}/> 
                        </div>
                        <div className="input-group">
                            <p> email address 
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
                            <input type={isPasswordVisible ? 'text' : 'password'} id='signInPassword' value={password} onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                         <div className="signIn__content-button">
                            <Button text={'Sign Up'} buttonStyle={1} />
                             <p onClick={() => signOut()}> Already have account <Link href={'/login'}>Log In</Link></p>
                          </div>
                    </form>
                    </div>
                </div>
            </div>
    )
}

export default SignIn;