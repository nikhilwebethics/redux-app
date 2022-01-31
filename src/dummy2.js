import { useState, useEffect } from 'react';


function Testing() {
  const [post, setPost] = useState(null);
  const[limit,setLimit]=useState(6559);

  useEffect(() => {
    getData();

      async function getData() {
      const response = await fetch(`https://renemorozowich.com/wp-json/wp/v2/posts/${limit}`);
      const data = await response.json();

  
      setPost(data) ;
    }
  }, [limit]); 

    const LoadMore = () =>{
    setLimit(limit+26)
    }
  return (
    <div >
    <h1>All Blogs</h1>

    {post && (
      <div className="posts">

            <h1 className="text-2xl font-bold leading-7 text-blue-900 ">{post.title.rendered}</h1>
            <p>{post.date}</p>
            <p>Category : {post.categories}</p> 
            <p>{post.uagb_excerpt}</p><br/>

      </div>
    )}
    <button onClick={LoadMore}>Load more</button>
  </div>
  )
}
export default Testing;