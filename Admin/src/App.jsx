import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UploadProduct from './Componets/UploadProduct';
import Products from './Componets/Products';
import OrderPage from './Componets/OrderPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UploadProduct />} />
      <Route path="/products" element={<Products />} />
      <Route path="/orders" element={<OrderPage />} />


    </Routes>
  );
}

export default App;
