
import './App.css'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'


function App() {
  
  return (
    <>
     <header className='w-full' >
      <h1 className='bg-[#F3F3F3] text-4xl'> Create Resgistration 
      </h1>
    </header>
    <div className='md:flex gap-3'> 
      <Home></Home>
      <Cart></Cart>

    </div>
   
      
    </>
  )
}

export default App
