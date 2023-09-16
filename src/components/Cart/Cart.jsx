import PropTypes from "prop-types";

const Cart = ({ selectedCard, totalCredit, remaining }) => {

  return (
    <div className="md:w-1/4  bg-white rounded-lg text-left  ">
      <div className="m-5">
      <h1 className="text-xl my-5 text-blue-400 ">Credit Hour Remaining {remaining} hr</h1>
      <hr />
      <h1 className="text-3xl">Cours name: </h1>
      <ol className="list-decimal m-5">
        {selectedCard.map((courses) => (
          <li key={courses.id}>{courses.course_name}</li>
        ))}
      </ol>
      <hr />
      <p className="my-5"> Total Credit:{totalCredit}</p>
      <hr />
      <div>Total Price: 4800 USD</div>
      </div>
    </div>

  );
};
Cart.propTypes = {
  selectedCourses: PropTypes.array,
};

export default Cart;
