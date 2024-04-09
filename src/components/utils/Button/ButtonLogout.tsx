"use client"
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react'
import React from 'react'

const ButtonLogout = () => {
  return (
    <Button 
        onClick={() => signOut({ callbackUrl : `${window.location.origin}/auth`})}
    >
        Logout
    </Button>
  )
}

export default ButtonLogout