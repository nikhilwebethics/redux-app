import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import{getPosts} from "../redux/features/postSlice";

import { Link } from "react-router-dom";
import Postdetails from '../Pages/Postdetails';


function Posts(){
  const perPage = 10;
  const [page, setPage] = useState(1);
  const {posts, loading} = useSelector ((state)=> state.post);

  const [userPost, setUserPost] = useState([]);


  const LoadMore = () =>{
    setPage(page+1)
    {console.log(page)}
    }

  const dispatch = useDispatch();
    useEffect(()=> {
     dispatch(getPosts({page},{perPage}));
     setUserPost([...userPost, dispatch(getPosts({page},{perPage}))]);
    
  }, [])

  
if(loading){
  return <div class="flex justify-center items-center">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span class="visually-hidden">Loading</span>
            </div>
        </div>
}
  
return(

<> 
  <h1 className="text-4xl ...">All Blogs</h1><br/>
    {posts.map((item , key) => (
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