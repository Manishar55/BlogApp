
import Blogs from "./components/Blogs"
import Pagination from "./components/Pagination"
import Header from "./components/Header"
import { useContext, useEffect } from "react";
import {Route, Routes, useLocation, useSearchParams} from "react-router-dom"
import { AppContext } from "./context/AppContext";
import "./App.css"
import Home from "./Pages/Home"
import BlogPage from "./Pages/BlogPage";
import CategoryPage from "./Pages/CategoryPage"
import TagPage from "./Pages/TagPage"


export default function App() {

  const {fetchBlogPosts} =useContext(AppContext);

  const [searcgParams, setSearchParams]=useSearchParams();
  const location=useLocation();

  useEffect(()=>{

    //calling on the basis of page
    // fetchBlogPosts();

    const page = searcgParams.get("page") ?? 1;

    //calling on the basis of tag
    if(location.pathname.includes("tags")){
      //show the tag page
      const tag=location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), tag);
    }

    //calling on the basis of categories
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replace("-", " ");
      fetchBlogPosts(Number(page), null, category);
    }

    //calling on the basis of page number
    else{
      fetchBlogPosts(Number(page));
    }
  },[location.pathname, location.search]);

  return(
    // <div className="w-full h-full flex flex-col gap-y-1 justify-center items-center ">
    //    <Header/>
    //    <Blogs/>
    //    <Pagination/>
    // </div>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
  );
}
