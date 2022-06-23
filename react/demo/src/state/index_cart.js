import React from 'react';
import ReactDOM from 'react-dom/client';
import Cart from './basics/Cart';
import './index.css';
import reportWebVitals from './reportWebVitals';
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Cart cartItems={[{ name: 'iPhone 12', price: 100000, qty: 2 },
                      { name: 'Dell XPS 15', price : 150000, qty : 1}]} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
