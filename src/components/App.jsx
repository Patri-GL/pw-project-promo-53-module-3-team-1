import "../styles/App.scss";
import { useState, useEffect } from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import Card from "./Projects/Card";
import Form from "./Projects/Form";

function App() {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("data");
    
   
    return savedData ? JSON.parse(savedData) : {
      name: "Elegant Workspace",
      slogan: "Diseños Exclusivos",
      repo: "http://localhost:5173/#",
      demo: "http://localhost:5173/#",
      technologies: "React JS - HTML - CSS",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione",
      author: "Emmelie Bjôrklund",
      job: "Full stack Developer",
    };
  });

  const changeState = (field, value) => {
    setData((prevData) => {
      const newData = {
      ...prevData,
      
      [field]: value,
    }
   

 
});

  }; 
  useEffect(() => {
    console.log("Guardando en localStorage:", data);
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);
  
  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log('Llamando al handleSubmit de mamá!');
    
    fetch("https://dev.adalab.es/api/projectCard",
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(dataResponse => {
        console.log(dataResponse);        
      });
  }

  return (
    <>
      <div className="container">
        <Header />
        <main className="main">
          <Hero />
          <Card
            name={data.name}
            slogan={data.slogan}
            repo={data.repo}
            demo={data.demo}
            technologies={data.technologies}
            desc={data.desc}
            author={data.author}
            job={data.job}
          />
          <Form data={data} changeState={changeState} handleSubmit={handleSubmit}/>
 
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

  