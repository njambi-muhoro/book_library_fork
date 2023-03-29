import {Routes, Route} from 'react-router';
import './App.css';
import NavBar from "./Components/NavBar"
import BookCollection from "./Components/BookCollection"
import Login from "./Components/Login"
import Register from "./Components/Register"
import User from "./Components/User"
import Admin from './Components/Admin';

import BookDetails from "./Components/BookDetails"
import HomePage from './Components/HomePage';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>

      <Route exact path="/home" element={<HomePage/>} />

        <Route path='/' element={<HomePage/>}/>
      <Route exact path="/home" element={<BookCollection/>} />

      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
      <Route path="/user" element={<User/>}/>
      <Route exact path="/admin" element={<Admin/>} />
      

      


      <Route path="/home/:homeId" element={<BookDetails />} />


      </Routes>
    </div>
  );
}

export default App;
