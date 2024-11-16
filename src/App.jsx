
import { createPortal } from 'react-dom';
import './App.css'
import Cart from './Components/Cart';
import ProductList from './Components/ProductList'
import Modal from './Components/Modal';
import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar';
import useProductsData from './Hook/useProductsData';


function App() {
  const [IsModalOpen, setIsModalOpen] = useState(false);
  const {totalItemCount} = useProductsData();
  return (
    <BrowserRouter>
    <Navbar totalItemCount={totalItemCount()} />
    <main className={`max-w-[1440px] py-8 xl:m-auto flex items-center justify-center ${IsModalOpen? 'fixed': ''}`}>
    <Routes>
      <Route path='/' element={<ProductList />} />
      <Route path='/Cart-Box' element={<Cart IsModalOpen={IsModalOpen} setIsModalOpen={setIsModalOpen} />} />
    </Routes>
    {createPortal(<Modal setIsModalOpen={setIsModalOpen} IsModalOpen={IsModalOpen} />,document.getElementById('portal'))}
    </main>
    </BrowserRouter>
  )
}

export default App
