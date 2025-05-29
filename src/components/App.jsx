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

  //   const handleInputChange = (eve) => {
  //   const { name, value } = eve.target;
  //   setProjectData(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  const handleInputNameProject = (eve) => {
    setNameProject(eve.target.value);
  };
  const handleInputSloganProject = (eve) => {
    setSloganProject(eve.target.value);
  };
  const handleInputRepoProject = (eve) => {
    setRepoProject(eve.target.value);
  };
  const handleInputDemoProject = (eve) => {
    setDemoProject(eve.target.value);
  };
  const handleInputTechnologies = (eve) => {
    setTechnologies(eve.target.value);
  };
  const handleInputDescProject = (eve) => {
    setDescProject(eve.target.value);
  };
  const handleInputAuthorProject = (eve) => {
    setAuthorProject(eve.target.value);
  };
  const handleInputJobProject = (eve) => {
    setJobProject(eve.target.value);
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
          <Form
            handleInputNameProject={handleInputNameProject}
            handleInputSloganProject={handleInputSloganProject}
            handleInputRepoProject={handleInputRepoProject}
            handleInputDemoProject={handleInputDemoProject}
            handleInputTechnologies={handleInputTechnologies}
            handleInputDescProject={handleInputDescProject}
            handleInputAuthorProject={handleInputAuthorProject}
            handleInputJobProject={handleInputJobProject}
          />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
