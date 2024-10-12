import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

// this will call api/auth/signin default by next js
export const authOption ={

    secret:process.env.NEXT_PUBLIC_AUTH_SECRET,
    session:{
        strategy: "jwt",
    },
    providers:[
        CredentialsProvider({

        })
    ]

}
const handeler=NextAuth(authOption);

export {handeler as GET, handeler as POST}