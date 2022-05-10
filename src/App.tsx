import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

const Book = React.lazy(() => import('pages/Product'));
const Cart = React.lazy(() => import('pages/Cart'));
const Products = React.lazy(() => import('pages/Products'));
const Checkout = React.lazy(() => import('pages/Checkout'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/products/:productId' element={<Book />} />
        <Route path='/products' element={<Products />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/' element={<Navigate to='/products' />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
