import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { Users } from "@/lib/UserModel";

const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    CredentialsProvider({
      id: "cred-01",
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith", required: true },
        password: { label: "Password", type: "password", required: true }
      },
      async authorize({email , password}, req) {
        // Add logic here to look up the user from the credentials supplied
        // const user = { id: "1", name: "J Smith", email: "", image: "/imgs/card1.png" }
        let user = await Users.findOne({ email });
        // let bytes = cryptoJS.AES.decrypt(user.password, email);
        // let pass = bytes.toString(cryptoJS.enc.Utf8);
        // user.image = user?.imgUrl;
        // console.log(user);
        return user
        

        // if (!user) {
        //   return { message: "No such account found...!", success: false };
        // } else if (password == pass) {
        //   user.success = true;
        //   return user;
        // } else {
        //   return { success: false, message: "Wrong credentials!" }
        // }
      }
    }),
  ],
})

export { handler as GET, handler as POST }