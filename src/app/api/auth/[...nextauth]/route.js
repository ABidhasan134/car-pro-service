import connectionDB from "@/lib/connectionDB";
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
        const { email, password } = credentials;

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

        console.log("Login successful");
        return { id: currentUser._id, name: currentUser.name, email: currentUser.email };
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
