import { assets } from "../../assets/assets";

const CallToAction = () => {
   return (
      <div className="flex items-center flex-col justify-center space-y-6">
         <h1 className="text-xl md:text-4xl text-gray-800 font-semibold">Learn anything, anytime, anywhere</h1>
         <p className="text-gray-500 text-sm">Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.</p>
         <div className="flex items-center font-medium gap-6 mt-4">
            <button className="px-10 py-3 rounded-md text-white bg-blue-600">Get Started</button>
            <button className="flex items-center gap-2 cursor-pointer">Learn more <img src={assets.arrow_icon}/></button>
         </div>
         
      </div>
   );
};

export default CallToAction;