
import React, { useContext, useEffect, useState } from 'react'
import Blogs from '../components/Blogs';
import { useLocation, useNavigation } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';
import BlogDetails from '../components/BlogDetails';
import Header from '../components/Header';

function BlogPage() {

    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs]=useState([]);
    const navigation = useNavigation();
    const location = useLocation();
    const {setLoading, loading}=useContext(AppContext);
    const blogId=location.pathname.split("./").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);

        let url=`${baseUrl}?blogId=${blogId}`;

        try{
            const res=await fetch(url);
            const data=await res.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error){
            console.log("Error in Blog id");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect(()=>{
        if(blogId){
            fetchRelatedBlogs();
        }
    }, [location.pathname])

    return (
        <div>
            <Header />
            <div>
                <button onClick={() => navigation(-1)}>
                    Back
                </button>
                {
                    loading? (<h2>Loading</h2>) : (blog? (
                        <div>
                            <BlogDetails post={blog}/>
                            <h2>Related Blogs</h2>
                            {
                                relatedBlogs.map((post)=>(
                                    <div><BlogDetails post={post} /></div>
                                ))
                            }
                           
                        </div>
                    ) : (<p> No Blog Found </p>))
                }
                
            </div>
        </div>
    )
}

export default BlogPage