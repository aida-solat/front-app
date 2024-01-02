import React, { useState } from 'react';
import PurchaseContext from './purchaseContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Purchase from './pages/purchase';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const [purchasedItems, setPurchasedItems] = useState([]);
  return (
    <>
      <PurchaseContext.Provider value={{ purchasedItems, setPurchasedItems }}>
        <Router>
          <div className='App'>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/purchase'
                element={<Purchase />}
              />
            </Routes>
          </div>
        </Router>
      </PurchaseContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
