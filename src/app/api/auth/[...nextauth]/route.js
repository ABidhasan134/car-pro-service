import connectionDB from "@/lib/connectionDB";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google"; 
import FacebookProvider from "next-auth/providers/facebook";
import { signIn } from "next-auth/react";
import { NextResponse } from "next/server";


export const authOption = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hour
  },
//   provider should be written like this
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        console.log(email,password);
        if (!email || !password) {
          console.log("Credentials are missing");
          throw new Error("Please provide both email and password.");
        }

        const db = await connectionDB();
        const userCollection = db.collection("users");
        const currentUser = await userCollection.findOne({ email: email });

        if (!currentUser) {
          console.log("User not found");
          throw new Error("You don't have an account. Please sign up.");
        //   return "401"
        }

        // Here you would normally check the password hash and compare it.
        // Assuming a simple password check for now.
        if (currentUser.password !== password) {
          console.log("Invalid password");
          throw new Error("Invalid password. Please try again.");
        }
          console.log("Login successful",currentUser);
          return currentUser;
      },
    }),
    
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    }),
    // 1621590658603449
    // 81a3f3868b17d31ca6f6340f8c86eb6e
    FacebookProvider({
      clientId: process.env.NEXT_FACEBOOK_CLIENT_ID,
      clientSecret: process.env.NEXT_FACEBOOK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    // google login data save in database
    async signIn({user, account, email}){
      if(account.provider==='google'||account.provider==='facebook')
      {
        const {name,email,image}=user;
        try{
          const db=await connectionDB();
          const userCollaction= db.collection('users');
          const userExists=await userCollaction.findOne({email})
          if(!userExists){
            const res=await userCollaction.insertOne(user)
            return user;
          }
          else{
            return user;
          }
        }
        catch(error){
          console.log(error)
        }
      }
    }
  
  },
  pages: {
    signIn: '/logIn', // Custom log-in page where oure page landing
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
