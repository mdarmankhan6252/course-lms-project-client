import { Link } from "react-router-dom";
import { assets, dummyTestimonial } from "../../assets/assets";

const Testimonials = () => {
   return (
      <div className="pb-14 px-4 md:px-0">
         <h2 className="text-3xl font-medium text-gray-800">Testimonials</h2>
         <p className="text-sm md:text-base text-gray-500 mt-3 max-w-2xl mx-auto">Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.</p>

         <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-16 lg:grid-cols-3 px-4 max-w-5xl mx-auto">
            {
               dummyTestimonial.map((testimonial, i) => <div className="flex flex-col justify-start items-center gap-5  border border-gray-500/10 pb-0 rounded-lg bg-white shadow-[0_4px_15px_0] overflow-hidden shadow-black/5" key={i}>
                  <div className="flex items-center w-full p-4 gap-x-5 bg-gray-100/80 ">
                     <div>
                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                     </div>
                     <div className="text-left">
                        <h1 className="text-lg font-medium text-gray-800">{testimonial.name}</h1>
                        <p className="text-gray-800/80">{testimonial.role}</p>
                     </div>
                  </div>
                  <div className="p-5 pb-7">
                     <div className="flex items-center space-x-0.5">
                        {[...Array(5)].map((_, i) => (
                           <img key={i} src={assets.star} className="w-5 h-5" />
                        ))}
                     </div>
                     <p className="text-gray-500 mt-5 font-light text-justify">{testimonial.feedback}</p>
                     <Link className="block text-left pt-4 text-blue-600 underline font-light">Read more</Link>
                  </div>

               </div>)
            }
         </div>

      </div>
   );
};

export default Testimonials;