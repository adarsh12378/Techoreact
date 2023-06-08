import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Header from "./Components/Header";
import Home from "./Components/Home.jsx";
import Footer from "./Components/Footer";

import Videos from './Components/Videos.jsx';
import Upload from "./Components/Upload.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx"


function App() {
  return (
    <Router>
      <Header />
<Routes>
  <Route path='/'element={<Home/>}/>
   <Route path="/videos" element={<Videos />} />
       
   <Route path="/upload" element={<Upload />} />
   <Route path="/login" element={<Login />} />
  
   <Route path="/Signup" element={<Signup />} />
</Routes>
<Footer/>
    </Router>
  );
}

export default App;
