import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Registration from './components/Registration';
import Home from './components/Home';
import Login from './components/Login';
import Post from './components/Post';
import Create from './components/Create';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Registration' element={<Registration/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/inscrible' element={<Post/>}></Route>
        <Route path='/new-post' element={<Create/>}></Route>
      </Routes>
    </>
  );
}

export default App;