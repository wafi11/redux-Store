"use client"
import { Github } from 'lucide-react'
import React from 'react'
import { Button } from '../../../ui/button'
import { signIn } from "next-auth/react"

const SignInWithGithub = () => {
  return (
    <Button 
          onClick={() =>
            signIn("github", {
              callbackUrl: `${window.location.origin}`,
            })
          }
        className="mt-6 " variant="secondary">
        Login with Github <Github className="w-6 h-4 ml-4"/>
    </Button>
  )
}

export default SignInWithGithub