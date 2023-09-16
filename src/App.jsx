import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Home from "./components/Home/Home";
import Swal from 'sweetalert2'

function App() {
  const [allCourses, setallCourses] = useState([]);
  const [selectedCard, setSelectedCard] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setallCourses(data));
  }, []);

  const handleSelectCourses = (courses) => {
    const isExist = selectedCard.find((item) => item.id == courses.id);
    let count = courses.credit;
    if(isExist){
      Swal.fire('Already Selected')
    }
    else{
      selectedCard.forEach((item) => {
        count = count + item.credit;
      });
      const totalRemaining = 20 - count;
      if(count > 20){
        Swal.fire('Credit cannot be more than 20')
      }
      else{
        setTotalCredit(count);
        setRemaining(totalRemaining);
        setSelectedCard([...selectedCard, courses]);
      }
    }
  };
  return (
    <>
      <header className="w-full">
        <h1 className=" text-4xl mb-10"> Create Resgistration</h1>
      </header>
      <div className="md:flex gap-3">
        <Home
          allCourses={allCourses}
          handleSelectCourses={handleSelectCourses}
        ></Home>
        <Cart selectedCard={selectedCard} totalCredit={totalCredit} remaining={remaining}></Cart>
      </div>
    </>
  );
}

export default App;
