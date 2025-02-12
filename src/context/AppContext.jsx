import { createContext, useEffect, useState } from "react";
import { dummyCourses } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext()

export const AppContextProvider = (props) => {
   const [allCourses, setAllCourses] = useState([]);
   const [isEducator, setIsEducator] = useState(true)
   const navigate = useNavigate();

   const fetchAllCourses = async() =>{
      setAllCourses(dummyCourses)
   }
   useEffect(() =>{
      fetchAllCourses()
   },[])

   const value = {
      allCourses,
      navigate,
      isEducator,
      setIsEducator
   }
   return (
      <AppContext.Provider value={value}>
         {props.children}
      </AppContext.Provider>
   )

}
