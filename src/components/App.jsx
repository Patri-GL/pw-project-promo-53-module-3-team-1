import "../styles/App.scss";
import { useState } from "react";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Hero from "./Layout/Hero";
import Card from "./Projects/Card";
import Form from "./Projects/Form";

function App() {
  //   const [projectData, setProjectData] = useState({
  //   nameProject: "Elegant Workspace",
  //   sloganProject: "Diseños Exclusivos",
  //   repoProject: "http://localhost:5173/#",
  //   demoProject: "http://localhost:5173/#",
  //   technologies: "React JS - HTML - CSS",
  //   descProject: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione",
  //   authorProject: "Emmelie Bjôrklund",
  //   jobProject: "Full stack Developer"
  // });
  const [nameProject, setNameProject] = useState("Elegant Workspace");
  const [sloganProject, setSloganProject] = useState("Diseños Exclusivos");
  const [repoProject, setRepoProject] = useState("http://localhost:5173/#");
  const [demoProject, setDemoProject] = useState("http://localhost:5173/#");
  const [technologies, setTechnologies] = useState("React JS - HTML - CSS");
  const [descProject, setDescProject] = useState(
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, quos? Itaque, molestias eveniet laudantium adipisci vitae ratione"
  );
  const [authorProject, setAuthorProject] = useState("Emmelie Bjôrklund");
  const [jobProject, setJobProject] = useState("Full stack Developer");

  const changeState = (field, value) => {
    console.log("changestate(", field, value, ")");

    if (field === "name") {
      setNameProject(value);
    } else if (field === "slogan") {
      setSloganProject(value);
    } else if (field === "repo") {
      setRepoProject(value);
    } else if (field === "demo") {
      setDemoProject(value);
    } else if (field === "technologies") {
      setTechnologies(value);
    } else if (field === "desc") {
      setDescProject(value);
    } else if (field === "autor") {
      setAuthorProject(value);
    } else if (field === "job") {
      setJobProject(value);
    }
  };
  //para añadir imágenes: https://github.com/Adalab/componente-react-de-foto-de-perfil
  return (
    <>
      <div className="container">
        <Header />

        <main className="main">
          <Hero />

          <Card
            nameProject={nameProject}
            sloganProject={sloganProject}
            repoProject={repoProject}
            demoProject={demoProject}
            technologies={technologies}
            descProject={descProject}
            authorProject={authorProject}
            jobProject={jobProject}
          />
          <Form changeState={changeState} />
        </main>
        <Footer />
      </div>
    </>
  );
}
export default App;
