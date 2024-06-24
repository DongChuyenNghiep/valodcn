import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Rule from './pages/rule';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Allteam from './pages/allteam';
import SwissStage from './pages/swissstage';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Stat from './pages/stat';
import Calendar from './pages/calendar';
import Playoff from './pages/playoff';
import SignUp from './pages/signup';
import Login from './pages/login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/swissstage' element={<SwissStage />} />
    <Route path='/rule' element={<Rule />} />
    <Route path='/allteam' element={<Allteam />} />
    <Route path='/stat' element={<Stat />} />
    <Route path='/calendar' element={<Calendar />} />
    <Route path='/playoff' element={<Playoff />} />
    <Route path='/signup' element = {<SignUp />} />
    <Route path='/login' element = {<Login/>} />
  </Routes>

    <Footer />
  </BrowserRouter>
  
);

