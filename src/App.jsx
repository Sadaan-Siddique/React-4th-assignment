import './App.css';
import { Routes, Route,} from "react-router-dom";
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
