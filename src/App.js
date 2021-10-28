import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Courses } from "./components/Courses/Courses";
import { Calculator } from "./components/Calculator/Calculator";
import { useState, useEffect } from "react";
import { getCourses } from "./api";

function App() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then((data) => {
      let result = data.Valute;
      var arr = [];
      Object.keys(result).forEach(function(key) {
        arr.push(result[key]);
      });
      setCourses(arr);
    });
  }, [courses]);

  const ratesVariables = () => {

  }

  return (
    <>
      <Header />
      <main className="main">
        <Calculator ratesVariables={ratesVariables} courses={courses}/>
        <Courses courses={courses}/>
      </main>
      <Footer />
    </>
  );
}

export default App;
