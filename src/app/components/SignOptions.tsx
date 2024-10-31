import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "./Button"
import { GithubProviderConfig } from "../api/auth/GithubProviderConfig"
import Image from "next/image"

export default function SignOptions() {

  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <span>Name: {session.user?.name}</span>
        
        <Image src={session.user?.image || ''} alt="user image" width={180} height={180} />

        <Button onClick={() => signOut()}>Sign out</Button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn(GithubProviderConfig.id)}>Sign in</Button>
    </>
  )
}