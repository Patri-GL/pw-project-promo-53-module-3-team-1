import { NavLink } from "react-router";
import imgAdalab from "../../images/adalab.png";
import imgLaptop from "../../images/laptop-code-solid.svg";

function Header() {
  return (
    <>
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

        <menu>
          <NavLink to="../">Inicio</NavLink>
          <br />
          <NavLink to="../create">Crea tu tarjeta</NavLink>
        </menu>
      </header>
    </>
  );
}

export default Header;
