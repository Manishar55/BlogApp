
import React from 'react'
import { NavLink } from 'react-router-dom'

function BlogDetails({post}) {
  return (
    <div className=''>
        <NavLink to={`/blog/${post.id}`}>
            <span>{postMessage.title}</span>
        </NavLink>
        <p>
            By <span>{post.author}</span> on {" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
                <span>{post.category}</span>
            </NavLink>
        </p>
        <p>Posted on {post.date}</p>
        <p>{post.content}</p>
        <div>
            {post.tags.map((tag, index)=>{
                return <NavLink key={index} to={`/tag/${tag.replaceAll(" ", "-")}`}>
                            <span>{`#${tag}`}</span>
                        </NavLink>
            })}
        </div>
    </div>
  )
}

export default BlogDetails