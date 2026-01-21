import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { db } from "../db";

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      // When user signs in with Google, create/update waitlist entry
      if (account?.provider === "google" && user.email) {
        try {
          const apiUrl =
            process.env.NEXT_PUBLIC_API_URL ||
            "https://doptor-backend.vercel.app";
          await fetch(`${apiUrl}/api/waitlist`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userId: user.id,
              name: user.name || "",
              email: user.email,
              image: user.image,
            }),
          });
        } catch (error) {
          console.error("Error creating waitlist entry:", error);
          // Don't block sign-in if waitlist creation fails
        }
      }
      return true;
    },
  },
});
