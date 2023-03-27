import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

debug: process.env.NODE_ENV !== "production";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};
export default NextAuth(authOptions);
