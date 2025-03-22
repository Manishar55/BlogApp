
import "./Card.css"
import React from 'react'

function Card({post}) {
  return (
    <div>
        <p className='title' >
            {post.title}
        </p>
        <p>By <span>{post.author}</span>on <span>{post.category}</span></p>

        <p>Posted on {post.date}</p>
        <p>{post.content}</p>
        <div>
            {post.tags.map((tag, index)=>{
                return <span key={index}>{`#${tag}`}</span>
            })}
        </div>
    </div>
  )
}

export default Card