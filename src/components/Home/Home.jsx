import { useEffect, useState } from "react";
import { } from "react-icons"
import Card from "../card/card";
import PropTypes from "prop-types";



const Home = ({handleSelectCourses}) => {
  const [allCourses,setallCourses] = useState([]);
  
  useEffect(() => {
    fetch("./data.json")
    .then((res) => res.json())
    .then((data) => setallCourses(data))
  },[])
  
  
    return (

    

     <div className="md:w-3/4 ">
         
         <div className="grid grid-cols-3 gap-3">
        {
          allCourses.map(courses => <Card
            key={courses.id}
            courses={courses}
            handleSelectCourses={handleSelectCourses}
          ></Card>)
          
        
        }
        

        </div>

    
    
  
     </div>
    );
};
Home.propTypes = {
  handleSelectCourses: PropTypes.array
};

export default Home;