import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";  
import CredentialsProvider from "next-auth/providers/credentials";
import connect  from "../../../../utils/db";
import User from '../../../../models/User';
import bcrypt from 'bcryptjs'


const handler =  NextAuth({
    providers: [
        GoogleProvider ({
            clientId: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID,
            clientSecret:  process.env.FACEBOOK_CLIENT_SECRET,
            authorization: {
              params: {
                scope: "email public_profile",
              },
            },
          }),
        CredentialsProvider ({
            id: 'credentials',
            name: 'Credentials',
            async authorize(credentials){
                await connect();
                try {
                    const user = await User.findOne({ email: credentials.email });
                    console.log(user)
                    let isPasswordCorrect = ''
                    if (!user) {
                        throw new Error("User not found");
                    }
                    if (user?.type?.trim() === "local") {
                        isPasswordCorrect = await bcrypt.compare(credentials.password, user.password || '');
                      } else {
                        throw new Error("User must login by social media");
                      }
                      

                    if (!isPasswordCorrect) {
                        throw new Error("Wrong password");
                    }

                    return user;
                } catch (err) {
                    console.error("Authentication error:", err.message);
                    throw err;
                }
            }
        }),
    ],
    secret:  process.env.secret,
    pages: {
        error: '/login'
    }
})

export {handler as GET, handler as POST}