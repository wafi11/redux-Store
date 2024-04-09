"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from 'next-auth/react'
import React from 'react'

const SignInWithEmail = () => {
  return (
        <>
            <div className="flex flex-col gap-y-2">
                    <Label>Email</Label>
                    <Input name="email" type="email" placeholder="name@example.com" />
            </div>
                 <Button className="mt-4" 
                    onClick={() => signIn('email',{callbackUrl:`${window.location.origin}`})}>
                    Login with email
                </Button>
        </>
  )
}

export default SignInWithEmail