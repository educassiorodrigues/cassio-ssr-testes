
import NextAuth from "next-auth"
import { GithubProviderConfig } from "../GithubProviderConfig"

const handler = NextAuth({
 providers: [
    GithubProviderConfig
 ],
})

export { handler as GET, handler as POST }