import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Postdetails from '../Pages/Postdetails';
import './Post.css'; 

function Post() {
  const perPage = 10;
  const [page, setPage] = useState(1);
 
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    const getUserList = () => {
      setLoading(true);
      fetch(`https://renemorozowich.com/wp-json/wp/v2/posts?filter[posts_per_page]=${perPage}&page=${page}&_embed`)
      
        .then(res => res.json())
        .then(res => {

          setUserList([...userList,...res]);
          
          setLoading(false);
        });
    }
    getUserList();
   
  }, [page]);
 
  return (
    <div className="container" style={{padding: 20}}>
        <div className="row">
            <div className="col-3"></div>
            <div class="col-6">
            <h1 className="text-4xl ...">All Blogs</h1><br/>
                {console.log(userList,"test")}
                {userList.map((item, i) => {
                    return <div key={i} className="box">
                 
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
                       
                    </div>
                })}

            <div className="clearfix"></div>
                { page && <button className="btn btn-primary load-more bg-red-700" onClick={() => setPage(page + 1)}>{loading ? ( <div class="flex justify-center items-center">
            <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
              <span class="visually-hidden">Loading</span>
            </div>
        </div>) : 'Load More'}</button>}
            </div>
           
        </div>
    </div>
  );
}
 
export default Post;