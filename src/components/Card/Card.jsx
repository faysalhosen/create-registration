import Credit from '../../assets/Frame.png'
import Doller from '../../assets/dollar-sign 1.png'

const Card = ({courses,handleSelectCourses}) => {
    const {image_url, course_name,details, price, credit} = courses
    return (
        <div>
            <div className="card bg-white  p-5 shadow-xl text-left min-h-full ">
  <figure className="">
    <img src={image_url} alt="" className="rounded-xl" />
  </figure>
  <div className="card-+body items-center ">
    <h2 className="card-title pt-2 text-base font-bold ">{course_name}</h2>
    <p className='py-2'>{details}</p>
   <div className="flex justify-between gap-8 py-2">
   <div className="flex "> 
      <img src={Doller} alt="" />
<p>{price}</p>
    </div>
    <div className="flex"><img src={Credit} alt="" />
<p className=''> Credit:{credit} hrs</p>
</div>
   </div>
    <div className="card-actions bg-blue-600 w-full h-60px  rounded-lg ">
      <button onClick={()=> handleSelectCourses(courses)} className="m-auto text-lg">Select</button>
    </div>
  </div>

      
    </div>
        </div>
    );
};

export default Card;