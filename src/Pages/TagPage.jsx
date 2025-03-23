
import React from 'react'
import Blogs from '../components/Blogs';
import Pagination from '../components/Pagination';
import { useLocation, useNavigation } from 'react-router-dom'

function TagPage() {

    const navigation=useNavigation();
    const location = useLocation();
    const tag=location.split("/").at(-1);

   return (

    <div>
        <Header/>
        <div>
            <button onClick={()=>navigation(-1)}>
                Back
            </button>
            <h2>Blogs Tagged <span>#{tag}</span></h2>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default TagPage