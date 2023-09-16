
import { } from "react-icons"
import Card from "../card/card";
import PropTypes from "prop-types";



const Home = ({handleSelectCourses,allCourses}) => {
  
  
    return (

    

     <div className="md:w-3/4">
         
         <div className="grid grid-cols-3  gap-3">
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
  handleSelectCourses: PropTypes.func,
  allCourses: PropTypes.array
};

export default Home;