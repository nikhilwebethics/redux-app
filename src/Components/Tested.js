import { useState, useEffect } from 'react';


function Tested() {
  const [post, setPost] = useState(null);
  const[limit,setLimit]=useState(5);

  useEffect(() => {
    getData();

      async function getData() {
      const response = await fetch(`https://renemorozowich.com/wp-json/wp/v2/posts?filter[posts_per_page]=${limit}&page=1&_embed`);
      const data = await response.json();

  
      setPost(data) ;
      {console.log(data)}
    }
  }, [limit]); 

    const LoadMore = () =>{
    setLimit(limit+26)
    }
  return (
    <div >
    <h1>All Blogs</h1>


    <button onClick={LoadMore}>Load more</button>
    
  </div>
  )
}
export default Tested;