import Navbar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import "./components/NavBar.css"
import "./components/Banner"
import Banner from "./components/Banner";
import "./App.css";


function App() {
  return (
    
     <BrowserRouter>
      <Navbar/>
      <Banner></Banner>
     </BrowserRouter>
   
  );
}

export default App;
