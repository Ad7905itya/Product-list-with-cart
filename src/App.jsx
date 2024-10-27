
import { createPortal } from 'react-dom';
import './App.css'
import Cart from './Components/Cart';
import ProductList from './Components/ProductList'
import Modal from './Components/Modal';
import { useState } from 'react';


function App() {
  const [IsModalOpen, setIsModalOpen] = useState(false)
  return (
    <>
    <h1 className={`text-[40px] ml-5 text-[--Rose-900] font-bold max-w-[1440px] 2xl:m-auto ${IsModalOpen? 'fixed': ''}`}>Desserts</h1>
    <main className={`max-w-[1440px] xl:m-auto gap-4 flex items-start flex-wrap ${IsModalOpen? 'fixed': ''}`}>
      <ProductList />
      <Cart setIsModalOpen={setIsModalOpen} />
      {createPortal(<Modal setIsModalOpen={setIsModalOpen} IsModalOpen={IsModalOpen} />,document.getElementById('portal'))}
    </main>
    </>
  )
}

export default App
