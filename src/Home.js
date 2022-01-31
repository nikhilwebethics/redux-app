import Header from "./Components/Header";
import Posts from "./Components/Posts";
import Searchbar from "./Components/Searchbar";


function Home(){
    return(
    <>
        <Header/>
        <div className="md:container md:mx-auto pt-10">
        <Searchbar/>
            <Posts/>
        </div>
       
    </>
    );
}
export default Home;