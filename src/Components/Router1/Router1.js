import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDescriptionPage from '../../pages/productDescription/productDescriptionPage';
import CartPage from '../../pages/cart/cartPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductDescriptionPage/>} />
        <Route path="/cart" element={<CartPage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
