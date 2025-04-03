import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect  from "../../../../Utils/db";
import User from '../../../../Models/User';
import bcrypt from 'bcryptjs'


const handler =  NextAuth({
    providers: [
        GoogleProvider ({
            clientId: process.env.CLIENTID,
            clientSecret: process.env.CLIENTSECRET,
        }),
        CredentialsProvider ({
            id: 'credentials',
            name: 'Credentials',
            async authorize(credentials){
                await connect();
                try {
                    const user = await User.findOne({ email: credentials.email });

                    if (!user) {
                        throw new Error("User not found");
                    }

                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);

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