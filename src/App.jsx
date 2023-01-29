import './App.css';
import { Routes, Route, } from "react-router-dom";
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Products from './Components/Products';
import Services from './Components/Services';
import Cards from './Components/Cards';
import MotorCycle from './Components/Cards/MotorCycle';
import Books from './Components/Cards/Books';
import Cameras from './Components/Cards/Cameras';
import Car from './Components/Cards/Car';
import Helmets from './Components/Cards/Helmets';
import Jackets from './Components/Cards/Jackets';
import Laptops from './Components/Cards/Laptops';
import Shirt from './Components/Cards/Shirt';
import Watches from './Components/Cards/Watches';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='products' element={<Products />}>
          <Route path='cards' element={<Cards />}>
            <Route path='motorcycle' element={<MotorCycle />} />
            <Route path='car' element={<Car />} />
            <Route path='laptops' element={<Laptops />} />
            <Route path='cameras' element={<Cameras />} />
            <Route path='books' element={<Books />} />
            <Route path='watches' element={<Watches />} />
            <Route path='shirt' element={<Shirt />} />
            <Route path='helmets' element={<Helmets />} />
            <Route path='jackets' element={<Jackets />} />
          </Route>
        </Route>
        <Route path='services' element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
