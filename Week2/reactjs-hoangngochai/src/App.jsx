import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from "./components/Button/Button";
import ProductCard from './components/ProductCard/ProductCard';
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProductCard/>
    
      <div style={{padding:'40px',display:"flex",gap:'16px'}}>
        <Button type = "primary">Primary</Button>
        <Button type = "danger">Danger</Button>
        <Button type = "succes">Succes</Button>
      </div>
    </>
  )
}

export default App
