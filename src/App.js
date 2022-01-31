import {
  BrowserRouter,
  Routes,
  Route,
 
} from "react-router-dom";

import Home from "./Home";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Postdetails from "./Pages/Postdetails";



function App() {
 
  return (

    <BrowserRouter>

      <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>

      <Routes>
          <Route path="/postdetails/:id" element={<Postdetails/>}/>
      </Routes>
      <Routes>
          <Route path="/login" element={<Login/>}/>
      </Routes>
      <Routes>
          <Route path="/register" element={<Register/>}/>
      </Routes>



    </BrowserRouter>

  );
}

export default App;
