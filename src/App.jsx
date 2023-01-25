import './App.css';
import { Routes, Route,} from "react-router-dom";
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Products from './Components/Products';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='products' element={<Products/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
