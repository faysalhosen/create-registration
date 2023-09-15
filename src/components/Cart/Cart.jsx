import PropTypes from "prop-types";

const Cart = ({ selectedCourses }) => {
  console.log(selectedCourses);
  return (
    <div className="md:w-1/4">
      <h1 className="text-2xl">Credid Hour Remaining 7 hr</h1>
      <hr />
      <h1 className="text-3xl">Cours name: </h1>
      <ol className="list-decimal mx-5">
        {selectedCourses.map((courses) => (
          <li key={courses.id}>{courses.course_name}</li>
        ))}
      </ol>
    </div>
  );
};
Cart.propTypes = {
  selectedCourses: PropTypes.array,
};

export default Cart;
