import Link from 'next/link'
import React from 'react'

const NotLogin = () => {
  return (
    <div className='bg-gray-800 h-screen flex items-center justify-center'>
      <div className=' rounded-xl border-2 border-cyan-900 bg-cyan-800 md:w-1/2 md:h-28 flex justify-center items-center flex-col w-11/12   h-2/6'>

      <h1 className='text-2xl text-white '>You are not logged in </h1>
        <Link href={"/login"} className='mt-2 border-2 border-cyan-950 bg-cyan-400 h-10 w-1/2 rounded-xl font-semibold flex justify-center hover:bg-cyan-500'>
      <button  className='text-xl '> 
      Click here to LogIn
      </button>
      </Link>
      </div>
    </div>
  )
}

export default NotLogin
