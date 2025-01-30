import React from 'react'
import { UserButton } from '@clerk/nextjs'

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <p>Clerk</p>

      <UserButton afterSignOutUrl="/" />
    </div>
  )
}

export default Home
