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
      <div><Filter filterData = {filterData} /></div>
      <div>
        {loading ? (<Spinner/>) : (<Cards courses = {courses}/>)}
      </div>
    </div>
  )
};

export default App;
