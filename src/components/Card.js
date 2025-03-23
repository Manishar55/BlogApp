
import "./Card.css"
import React from 'react'

function Card({post}) {
  return (
    <div>
        <p className='title font-bold text-xl text-rose-900' >
            {post.title}
        </p>
        <p className="italic mt-[5px]">By <span>{post.author}</span>on <span className="underline font-bold ">{post.category}</span></p>

        <p className="mb-[15px]">Posted on {post.date}</p>
        <p>{post.content}</p>
        <div className="text-blue-600 underline text-sm mt-[12px] flex gap-x-2">
            {post.tags.map((tag, index)=>{
                return <span key={index}>{`#${tag}`}</span>
            })}
        </div>
    </div>
  )
}

export default Card