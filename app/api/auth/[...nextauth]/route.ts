import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        name: {
          label: "Name",
          placeholder: "Full Name",
          type: "text",
        },
        email: {
          label: "email",
          type: "email",
          placeholder: "example@email.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "***********",
        },
      },
      authorize: async (credentials) => {
        const res = await fetch(
          "http://localhost:3000/api/auth/userCredentials",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }
        );
        if (res.ok) {
          const user = await res.json();
          return user;
        } else {
          return null; // Invalid credentials
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account }: any) {
      if (account.provider === "google") {
        try {
          const res = await fetch(
            "http://localhost:3000/api/auth/googleSignIn",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            }
          );
          if (res.ok) return user;
        } catch (error) {
          console.log(error);
        }
      }
      return user;
    },
  },
});

export { handler as GET, handler as POST };
