import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './landingpage/home/homepage';
import Aboutpage from './landingpage/about/aboutpage';
import Bookpage from './landingpage/book/bookpage';
import Navbar from './landingpage/navbar';
import Footer from './landingpage/footer';
import Menu from './landingpage/menu/menu';
//import Menu from './landingpage/home/foodtype';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <div className="app-layout">
  <Navbar/>
  <div className="content">
  <Routes>
  <Route  path='/' element={<Homepage/>}/>
  <Route  path='/about' element={<Aboutpage/>}/>
  <Route  path='/menu' element={<Menu/>}/>
  <Route  path='/Bookpage' element={<Bookpage/>}/>
  </Routes>
  </div>
  <Footer/>
  </div>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

