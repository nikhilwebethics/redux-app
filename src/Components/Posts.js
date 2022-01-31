import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import{getPosts} from "../redux/features/postSlice";

import { Link } from "react-router-dom";
import Postdetails from '../Pages/Postdetails';




function Posts(){

  const {posts, loading} = useSelector ((state)=> state.post);
  const[limit,setLimit]=useState(4);

  const LoadMore = () =>{
    setLimit(limit+2)
      if(limit==10){
        var element = document.getElementById("myDIV");
        element.remove("mystyle");
      }
    }

  const dispatch = useDispatch();
    useEffect(()=> {
     dispatch(getPosts());
  }, [])

if(loading){
  return <div class="flex justify-center items-center">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
        </div>
}
  
return(

<> 

  <h1 className="text-4xl ...">All Blogs</h1><br/>

    {posts.slice(0,`${limit}`).map((item , key) => (
      <>
      
      <h3 className="text-2xl font-bold leading-7 text-blue-900 "> 
      
        <Link 
        
          to={`/postdetails/${item.id}`}
          component={Postdetails} >{item.title.rendered}
        
        </Link>
      </h3>

      <p>{item.date}</p>
      <p>Category : {item.categories}</p> 
      <p>{item.uagb_excerpt}</p><br/>

      
      </>
    ))}
    
  <button id="myDIV" onClick={LoadMore} type="button" className="load-more bg-red-700 p-2">Load more</button>
  
</>

);
}
export default Posts;