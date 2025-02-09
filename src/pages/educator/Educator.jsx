import { Outlet } from "react-router-dom";

const Educator = () => {
   return (
      <div>
         I am educator page

         <div className="bg-slate-300 h-screen">
            <Outlet />
         </div>

      </div>
   );
};

export default Educator;