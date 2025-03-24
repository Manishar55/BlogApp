
import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"
import { useNavigate, useNavigation } from "react-router-dom";

export const AppContext=createContext(); //step1 -> create component

export default function AppContextProvider({children}){

    const [loading, setLoading]=useState(false);
    const[posts, setPosts]=useState([]);
    const [page, setPage]=useState(1);
    const [totalPages, setTotalPages]=useState(null);
    const navigate = useNavigate();

    //data filing
    async function fetchBlogPosts(page=1, tag=null, category) {
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;

        if(tag){
            url+=`&tag=${tag}`;
        }
        if(category){
            url+=`&category=${category}`;
        }

        try{
            const result= await fetch(url);
            const data=await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(error){
            console.log('Error in fetching data');
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }
    function handlePageChange(page){
        setPage(page);
        navigate({search: `?page=${page}`});
    }
    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    ////step2=> create provider and apply provider
    //App is childern here so, App component ko sara value send kar diye, 
    return <AppContext.Provider value={value}>
        {children} 
    </AppContext.Provider>
}