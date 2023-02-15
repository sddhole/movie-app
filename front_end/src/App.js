import Navbar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./components/NavBar.css"
import "./components/Banner"
import Banner from "./components/Banner";
import "./App.css";
import MovieList from "./components/MovieList";
import Movies from "./components/Movies"



function App() {
  return (
    
     <BrowserRouter>
      <Navbar/>
      <Banner></Banner>
      <MovieList></MovieList>
      <Routes>
      <Route path="/Movies" element={<Movies />}/>
      </Routes>
     </BrowserRouter>
      
   
  );
}

export default App;
