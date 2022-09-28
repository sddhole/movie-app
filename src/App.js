import Navbar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
import "./components/NavBar.css"
import "./components/Banner"
import Banner from "./components/Banner";
import "./App.css";
import MovieList from "./components/MovieList";


function App() {
  return (
    
     <BrowserRouter>
      <Navbar/>
      <Banner></Banner>
      <MovieList></MovieList>
     </BrowserRouter>
     
   
  );
}

export default App;
