
import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

function Home() {
  return (
    <div>
        <Header/>
        <div>
            <Blogs/>
            <Pagination/>
        </div>
    </div>
  )
}

export default Home