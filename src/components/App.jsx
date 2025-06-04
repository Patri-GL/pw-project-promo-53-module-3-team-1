import "../styles/App.scss";
import { useState } from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import Card from "./Projects/Card";
import Form from "./Projects/Form";

function App() {
  const [data, setData] = useState({
    name: "Elegant Workspace",
    slogan: "Diseños Exclusivos",
    repo: "http://localhost:5173/#",
    demo: "http://localhost:5173/#",
    technologies: "React JS - HTML - CSS",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione",
    author: "Emmelie Bjôrklund",
    job: "Full stack Developer",
  });
  // const [nameProject, setNameProject] = useState("Elegant Workspace");
  // const [sloganProject, setSloganProject] = useState("Diseños Exclusivos");
  // const [repoProject, setRepoProject] = useState("http://localhost:5173/#");
  // const [demoProject, setDemoProject] = useState("http://localhost:5173/#");
  // const [technologies, setTechnologies] = useState("React JS - HTML - CSS");
  // const [descProject, setDescProject] = useState(
  //   "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"
  // );
  // const [authorProject, setAuthorProject] = useState("Emmelie Bjôrklund");
  // const [jobProject, setJobProject] = useState("Full stack Developer");

  const changeState = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // const changeState = (field, value) => {
  //   console.log("changestate(", field, value, ")");

  //   if (field === "name") {
  //     setData(value);
  //   } else if (field === "slogan") {
  //     setData(value);
  //   } else if (field === "repo") {
  //     setData(value);
  //   } else if (field === "demo") {
  //     setData(value);
  //   } else if (field === "technologies") {
  //     setData(value);
  //   } else if (field === "desc") {
  //     setData(value);
  //   } else if (field === "author") {
  //     setData(value);
  //   } else if (field === "job") {
  //     setData(value);
  //   }
  // };
  //para añadir imágenes: https://github.com/Adalab/componente-react-de-foto-de-perfil
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
          <Form changeState={changeState} />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
