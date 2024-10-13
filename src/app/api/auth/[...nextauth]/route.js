import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 60 * 60, // 1 hour
  },
//   provider should be written like this
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {  },
        password: {  },
      },
      async authorize(credentials) {
        return true;
      },
    }),
  ],
  callbacks: {
  
  },
  pages: {
    signIn: '/logIn', // Custom log-in page where oure page landing
  },
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };
