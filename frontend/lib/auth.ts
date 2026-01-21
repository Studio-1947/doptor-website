import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  secret: process.env.AUTH_SECRET,
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
          const response = await fetch(`${apiUrl}/api/waitlist`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: user.name || "",
              email: user.email,
              image: user.image,
            }),
          });

          if (!response.ok) {
            const errorText = await response.text();
            // If email is already registered, that's fine - just log it and allow sign in
            if (errorText.includes("Email already registered")) {
              console.log("User already in waitlist:", user.email);
              return true;
            }
            console.error("Failed to create waitlist entry:", errorText);
          }
        } catch (error) {
          console.error("Error creating waitlist entry:", error);
          // Don't block sign-in if waitlist creation fails
        }
      }
      return true;
    },
  },
});
