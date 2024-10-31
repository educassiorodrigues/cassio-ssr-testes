import Github from "next-auth/providers/github";

export const GithubProviderConfig = Github({
    clientId: process.env.GITHUB_ID as string,
    clientSecret: process.env.GITHUB_SECRET as string
})