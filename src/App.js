import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About/About';
import Blogs from './components/pages/Blogs/Blogs';
import Portfolio from './components/pages/Portfolio/Portfolio';
import Footer from './components/shared/Footer';
import WhatIDo from './components/pages/WhatIDo';

function App() {
  return (
    <>
<Header>
  <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    <Route path='/skill' element={<WhatIDo></WhatIDo>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/portfolio' element={<Portfolio></Portfolio>}></Route>
    <Route path='/blogs' element={<Blogs></Blogs>}></Route>
  </Routes>
  <Footer></Footer>
</Header>
    </>
  );
}

export default App;
