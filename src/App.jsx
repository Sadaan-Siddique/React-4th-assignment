import './App.css';
import { Routes, Route, } from "react-router-dom";
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Products from './Components/Products';
import Services from './Components/Services';
import Camera from './Components/Camera';
import Car from './Components/Car';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='products' element={<Products />}>
          <Route path='camera' element={<Camera />} />
          <Route path='car' element={<Car />} />
        </Route>
        <Route path='services' element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
