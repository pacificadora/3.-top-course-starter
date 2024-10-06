import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("Network Error");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <div><Navbar/></div>
      <div className="bg-bgDark2">
        <div><Filter filterData = {filterData} /></div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (<Spinner/>) : (<Cards courses = {courses}/>)}
        </div>
      </div>
    </div>
  )
};

export default App;
