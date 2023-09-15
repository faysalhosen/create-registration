import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";

function App() {
  const [selectedCourses,setselectedCourses] = useState([]);
  const handleSelectCourses =(courses) =>{
    // console.log(courses)
    setselectedCourses([...selectedCourses,courses])
  }
  return (
    <>
      <header className="w-full">
        <h1 className="bg-[#F3F3F3] text-4xl"> Create Resgistration</h1>
      </header>
      <div className="md:flex gap-3">
        <Home handleSelectCourses = {handleSelectCourses}></Home>
        <Cart selectedCourses = {selectedCourses}></Cart>
      </div>
    </>
  );
}

export default App;
