import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProductContext from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
    <ProductContext>
      <App />
    </ProductContext>
)