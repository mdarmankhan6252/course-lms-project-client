import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";

const Footer = () => {
   return (
      <footer className="bg-gray-900  text-left w-full mt-20">
         <div className="flex flex-col md:flex-row items-start px-8 md:px-3 justify-center gap-10 md:gap-32 py-10 border-b border-white/30 max-w-5xl mx-auto">
            <div className="flex items-center flex-col sm:block">
               <img src={assets.logo_dark} alt="logo" />
               <p className="pt-6 text-center md:text-left text-sm text-white/80">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

            </div>

            <div className="flex flex-col items-center md:items-start w-full">
               <h2 className="font-semibold text-white mb-5">Company</h2>
               <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/'>About</Link></li>
                  <li><Link to='/'>Contact</Link></li>
                  <li><Link to='/'>Privacy</Link></li>
               </ul>
            </div>

            <div className="md:flex flex-col items-start w-full pt-6 sm:pt-0 ">
               <h2 className="font-semibold text-white mb-5 text-center md:text-left">Subscribe to our newsletter</h2>
               <p  className="pt-6 text-center md:text-left text-sm text-white/80">The latest news, articles, and resources, sent to your inbox weekly.</p>

               <div className="flex items-center gap-2 pt-4 justify-center md:justify-start">
                  <input type="email" placeholder="Enter your email" className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"/>
                  <button className="bg-blue-600 w-24 h-9 text-white rounded cursor-pointer">Subscribe</button>
               </div>


            </div>

         </div>
         <p className="py-4 text-center text-xs md:text-sm text-white/60">Copyright 2025 @ Arman. All rights reserved.</p>
      </footer>
   );
};

export default Footer;