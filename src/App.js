import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

const App = () => {

  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let output = await res.json();
      setCourses(output);
    } catch (error) {
      toast.error("Network Error");
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <div>
      <div><Navbar/></div>
      <div><Filter filterData = {filterData} /></div>
      <div>
        {loading ? (<Spinner/>) : (<Cards/>)}
      </div>
    </div>
  )
};

export default App;
