import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


function Postdetails(){
  
    const [post, setPost] = useState();
    const { id } = useParams();
  
    console.log(id)

    useEffect(() => {
        getData();
    
          async function getData() {
          const response = await fetch(`https://renemorozowich.com/wp-json/wp/v2/posts/${id}`);
          const data = await response.json();
          setPost(data);
       
          
        }
      }, []); 
 

    return(

    <>
        <h1 className="text-2xl font-bold leading-7 text-blue-900 ">{post.title.rendered}</h1>
        <p>{post.date}</p>
         <p>Category : {post.categories}</p> 
        <p>{post.uagb_excerpt}</p><br/>
        
    </>       
    );
}
export default Postdetails;