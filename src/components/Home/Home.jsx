import { useEffect, useState } from "react";
import { } from "react-icons"
import Card from "../card/card";



const Home = () => {
  const [allCourses,setallCourses] = useState([]);
  useEffect(() => {
    fetch("./data.json")
    .then((res) => res.json())
    .then((data) => setallCourses(data))
  },[])

  console.log(allCourses);
    return (

    

     <div className="md:w-3/4 ">
         
         <div className="grid grid-cols-3 gap-3">
        {
          allCourses.map(courses => <Card
            key={courses.id}
            courses={courses}
          ></Card>)
        }
            
    
    </div>
  
     </div>
    );
};

export default Home;