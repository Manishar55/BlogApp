
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Card from './Card';


function Blogs() {

  //consuming
  const {posts, loading}=useContext(AppContext);
  console.log("Post are  ", posts);
// Pst mai data hi nhi aa raha hia 
  return (
    <div className='w-11/12 h-screen max-w-[630px] py-3 flex flex-col gap-y-6 mt-[60px] mb-[60px] justify-center items-center '>
      {
        loading ? (<Spinner/>) : (
         posts.length===0 ? (<div><p>No post found</p></div>) : 
          (posts.map((post)=>(<Card post={post}/>)))
        )
      }
    </div>
  )
}

export default Blogs