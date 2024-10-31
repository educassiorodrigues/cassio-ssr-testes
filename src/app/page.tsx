'use client'
import { SessionProvider } from "next-auth/react"
import SignOptions from "./components/SignOptions"

export default function Home() {

  return (
    <>
      <SessionProvider>
        <SignOptions />
      </SessionProvider>
    </>
  )
}
