
import React, { useContext, useEffect, useState } from 'react'
import Blogs from '../components/Blogs';
import { useLocation, useNavigation } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { baseUrl } from '../baseUrl';

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
            setRelatedBlogs(data.relatedBlogs);
            
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
                            <BlogDetails/>
                            <h2>Blogs Tagged <span>#{tag}</span></h2>
                            {
                                relatedBlogs.map((post)=>(
                                    <div><BlogDetails post={post} /></div>
                                ))
                            }
                            <Blogs />
                        </div>
                    ) : (<p> No Blog Found </p>))
                }
                
            </div>
        </div>
    )
}

export default BlogPage