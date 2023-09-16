
# Course Registration

1. **Smart Course Recommendation Engine:**
   - Implement a recommendation system that suggests courses to users based on their interests, previous course selections, and user behavior. This feature enhances the user experience by helping users discover relevant courses they might not have found otherwise.

2. **Course Purchase History and Duplicate Prevention:**
   - Create a user-friendly dashboard where users can view their course purchase history. To prevent users from accidentally buying the same course again, implement a feature that checks their purchase history and displays a warning if they attempt to purchase a course they already own. This not only saves users money but also improves their overall experience.

3. **Time Management and Course Access Control:**
   - Integrate a time management feature that limits the amount of time a user can spend on a course within a 24-hour period to 20 hours. Once a user reaches this limit, they will be temporarily locked out of the course until the next 24-hour period begins. This ensures fair access to course materials and encourages users to manage their time effectively.


In my assignment project, I managed the state using React's `useState` hook to maintain various pieces of data and user interactions. Here's a breakdown of how I utilized these state variables:

1. **`allCourses` and `setAllCourses`:**
   - `allCourses` is used to store an array of all available courses. It holds the course data fetched from the server or an API.
   - `setAllCourses` is the setter function associated with `allCourses`, allowing me to update the list of courses when new data is fetched or when courses are added or removed.

2. **`selectedCard` and `setSelectedCard`:**
   - `selectedCard` is employed to store the selected course card. This state variable is updated using the `handleSelectCourse` function, which allows users to select a course card.
   - The selected course card data can be passed to another page or component for further display and processing.

3. **`remaining` and `setRemaining`:**
   - `remaining` is used to display and keep track of the remaining hours available for a user. In this context, it starts from 20 hours.
   - `setRemaining` is used to update the remaining hours when a user consumes some of their allocated time by accessing course content or taking actions that reduce their available time.

4. **`totalCredit` and `setTotalCredit`:**
   - `totalCredit` is employed to calculate and display the total credit hours accumulated by the user. It keeps track of the credit hours earned as the user completes courses.
   - `setTotalCredit` is used to update the total credit hours whenever a new course is completed and credit hours are earned.

By using these state variables, I can effectively manage the data related to courses, user selections, remaining hours, and total credit hours within my assignment project. React's `useState` hook provides a simple and efficient way to handle and update the application's state, ensuring that the UI reflects changes in the data and user interactions.






