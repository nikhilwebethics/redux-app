import Header from "./Components/Header";
import Post from "./Components/Post";

import Searchbar from "./Components/Searchbar";


function Home(){
    return(
    <>
        <Header/>
        <div className="md:container md:mx-auto pt-10">
        <Searchbar/>
        <Post/>
        </div>
       
    </>
    );
}
export default Home;