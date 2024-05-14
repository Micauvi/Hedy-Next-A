import Link from 'next/link'
import React from 'react'

const cartComment = ({comment}) => {
  return (
    <div  className="bg-gray-200 shadow-md rounded-lg p-4 flex space-x-10 items-center    border-2 border-gray-400 mb-5 justify-between">
       <img src={comment.avatar} alt={comment.name} className="w-20 h-20 rounded-full" />
       <div className='justify-center items-center  flex-col flex'>
         <p className="font-semibold text-xl">{comment.name}</p>
         <p className="text-gray-800 text-xl">{comment.comment}</p>
       </div>
       <div className='flex '>
<Link href={`/detail/${comment.id}`}>
       <button className='border-2 border-gray-800 w-32 h-14 text-lg  font-bold rounded-xl '>View Post</button>
</Link>
       </div>
     </div>
  )
}

export default cartComment