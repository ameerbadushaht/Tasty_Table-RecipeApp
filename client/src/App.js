import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Save from './pages/Save';
import Auth from './pages/Auth';
import Create from './pages/Create';
import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Auth' element={<Auth/>} />
          <Route path='/Create' element={<Create/>} />
          <Route path='/Save' element={<Save/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
