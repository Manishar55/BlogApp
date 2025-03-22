
import { createContext, useState } from "react";
import {baseUrl} from "../baseUrl"

export const AppContext=createContext(); //step1 -> create component

function AppContextProvider({children}){

    const [loading, setLoading]=useState(false);
    const[posts, setPosts]=useState([]);
    const [page, setPage]=useState(1);
    const [totalPages, setTotalPages]=useState(null);

    //data filing
    async function fetchBlogPosts(page=1) {
        setLoading(true);
        let url=`${baseUrl}?page=${page}`

        try{
            const res= await fetch(url);
            const data=await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.page);
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

    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages
    };

    ////step2=> create provider and apply provider
    //App is childern here so, App component ko sara value send kar diye, 
    return <AppContext.Provider value={value}>
        {children} 
    </AppContext.Provider>
}