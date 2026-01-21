import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
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
              name: user.name || "",
              email: user.email,
              image: user.image,
            }),
          });
        } catch (error) {
          console.error("Error creating waitlist entry:", error);
        }
      }
      return true;
    },
  },
});
