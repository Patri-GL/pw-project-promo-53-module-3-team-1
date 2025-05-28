import "../styles/App.scss";
import imgAdalab from "../images/adalab.png";
import imgLaptop from "../images/laptop-code-solid.svg";
import { useState } from "react";

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
        <header className="header">
          <a
            className="header__brand"
            href="./"
            title="Haz click para volver a la página inicial"
          >
            <img
              className="header__companyLogo"
              src={imgLaptop}
              alt="Logo proyectos molones"
            />
            <h1 className="header__title">Proyectos molones</h1>
          </a>
          <img className="logoSponsor" src={imgAdalab} alt="Logo Adalab" />
        </header>

        <main className="main">
          <section className="hero">
            <h2 className="title">Proyectos molones</h2>
            <p className="hero__text">
              Escaparate en línea para recoger ideas a través de la tecnología
            </p>
            <a className="button--link" href="./">
              Ver proyectos
            </a>
          </section>

          <section className="preview">
            <div className="projectImage"></div>
            <article className="card">
              <h2 className="card__projectTitle">
                <span className="card__projectTitle--text">
                  Personal project card
                </span>
              </h2>

              <div className="card__author">
                <div className="card__authorPhoto"></div>
                <p className="card__job">{jobProject}</p>
                <h3 className="card__name">{authorProject}</h3>
              </div>

              <div className="card__project">
                <h3 className="card__name">{nameProject}</h3>
                <p className="card__slogan">{sloganProject}</p>
                <h3 className="card__descriptionTitle">Product description</h3>
                <p className="card__description">{descProject}</p>

                <div className="card__technicalInfo">
                  <p className="card__technologies">{technologies}</p>

                  <a
                    className="icon icon__www"
                    href={demoProject}
                    title="Haz click para ver el proyecto online"
                  >
                    Web link
                  </a>
                  <a
                    className="icon icon__github"
                    href={repoProject}
                    title="Haz click para ver el código del proyecto"
                  >
                    GitHub link
                  </a>
                </div>
              </div>
            </article>
          </section>
          <form className="addForm">
            <h2 className="title">Información</h2>
            <fieldset className="addForm__group">
              <legend className="addForm__title">
                Cuéntanos sobre el proyecto
              </legend>
              <input
                className="addForm__input"
                type="text"
                name="name"
                id="name"
                placeholder="Nombre del proyecto"
                onInput={handleInputNameProject}
              />
              <input
                className="addForm__input"
                type="text"
                name="slogan"
                id="slogan"
                placeholder="Slogan"
                onInput={handleInputSloganProject}
              />
              <div className="addForm__2col">
                <input
                  className="addForm__input"
                  type="url"
                  name="repo"
                  id="repo"
                  placeholder="Repositorio"
                  onInput={handleInputRepoProject}
                />
                <input
                  className="addForm__input"
                  type="url"
                  name="demo"
                  id="demo"
                  placeholder="Demo"
                  onInput={handleInputDemoProject}
                />
              </div>
              <input
                className="addForm__input"
                type="text"
                name="technologies"
                id="technologies"
                placeholder="Tecnologías"
                onInput={handleInputTechnologies}
              />
              <textarea
                className="addForm__input"
                type="text"
                name="desc"
                id="desc"
                placeholder="Descripción"
                rows="5"
                onInput={handleInputDescProject}
              ></textarea>
            </fieldset>

            <fieldset className="addForm__group">
              <legend className="addForm__title">
                Cuéntanos sobre la autora
              </legend>
              <input
                className="addForm__input"
                type="text"
                name="autor"
                id="autor"
                placeholder="Nombre"
                onInput={handleInputAuthorProject}
              />
              <input
                className="addForm__input"
                type="text"
                name="job"
                id="job"
                placeholder="Trabajo"
                onInput={handleInputJobProject}
              />
            </fieldset>

            <fieldset className="addForm__group--upload">
              <label className="button">
                Subir foto del proyecto
                <input className="addForm__hidden" type="file" />
              </label>
              <label className="button">
                Subir foto de la autora
                <input className="addForm__hidden" type="file" />
              </label>
              <button className="button--large">Guardar proyecto</button>
            </fieldset>
          </form>
        </main>

        <footer className="footer">
          <img className="logoSponsor" src={imgAdalab} alt="Logo Adalab" />
        </footer>
      </div>
    </>
  );
}

export default App;
