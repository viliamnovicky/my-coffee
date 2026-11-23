import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { addUser, getUser } from "./data-service";

const authConfig = {
  trustHost: true,
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  cookies: {
    pkceCodeVerifier: {
      name: "__Secure-authjs.pkce.code_verifier",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
    state: {
      name: "__Secure-authjs.state",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
    callbackUrl: {
      name: "__Secure-authjs.callback-url",
      options: {
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
    sessionToken: {
      name: "__Secure-authjs.session-token",
      options: {
        httpOnly: true,
        sameSite: "none",
        path: "/",
        secure: true,
      },
    },
  },
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user;
    },
    async signIn({ user }) {
      try {
        const existingUser = await getUser(user.email);

        if (!existingUser) {
          await addUser({
            email: user.email,
            fullName: user.name,
            avatar: user.image,
          });
        }

        return true;
      } catch (error) {
        console.error("SIGN IN ERROR:");
        console.error(error);
        console.error(error.message);
        return false;
      }
    },
    async session({ session }) {
      const user = await getUser(session.user.email);
      session.user.userId = user.email;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);

