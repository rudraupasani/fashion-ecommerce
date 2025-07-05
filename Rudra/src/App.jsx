import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import LoginPage from './Pages/LoginPage';
import Register from './Componets/Register';
import Profile from './Pages/Profile';
import Error from './Componets/Eror';
import ContectUs from './Pages/ContectUs';



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/contactus' element={<ContectUs />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </>
  );
};

export default App;
