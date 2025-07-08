import { SignIn } from '@clerk/nextjs'
import React from 'react'

const signIn = () => {
  return (

    <div className='flex items-center justify-center h-screen'>
    <SignIn/>
    </div>
  )
}

export default signIn