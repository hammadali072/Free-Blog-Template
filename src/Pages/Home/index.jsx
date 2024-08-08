import React from 'react'
import Landing from './features/landing'
import Post from './features/Post'

const Home = () => {
  return (
    <div className='bg-dark'>
      <Landing/>
      <Post/>
    </div>
  )
}

export default Home