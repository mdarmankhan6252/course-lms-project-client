import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import CourseCard from "./CourseCard";

const CoursesSection = () => {
   const { allCourses } = useContext(AppContext);
   return (
      <div className="pb-16 2xl:px-40 px-4">
         <h2 className="text-3xl font-medium text-gray-800">Learn from the best</h2>
         <p className="text-sm md:text-base text-gray-500 mt-3 max-w-2xl mx-auto">Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>

         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 px-4 md:px-0 md:my-16 my-10 ">
            {allCourses.slice(0, 4).map((course, i) => <CourseCard key={i} course={course}/>)}
         </div>



         <Link to='/course-list' className="text-gray-500 border border-gray-500/30 px-10 py-3 rounded inline-block" onClick={() => scrollTo(0, 0)}>Show all courses</Link>
      </div>
   );
};

export default CoursesSection;