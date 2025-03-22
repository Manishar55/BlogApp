
import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
function Blogs() {

  //consuming
  const {posts, loading}=useContext(AppContext);

  return (
    <div>
      {
        loading ? (<Spinner/>) : (
          posts.length===0 ? (<div><p>No post found</p></div>) : (posts.map((post)=>(<Card/>)))
        )
      }
    </div>
  )
}

export default Blogs