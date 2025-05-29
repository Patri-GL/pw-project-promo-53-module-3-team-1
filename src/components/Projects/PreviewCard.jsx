function Preview(props) {
  return (
    <>
      <article className="card">
        <h2 className="card__projectTitle">
          <span className="card__projectTitle--text">
            Personal project card
          </span>
        </h2>

        <div className="card__author">
          <div className="card__authorPhoto"></div>
          <p className="card__job">{props.jobProject}</p>
          <h3 className="card__name">{props.authorProject}</h3>
        </div>

        <div className="card__project">
          <h3 className="card__name">{props.nameProject}</h3>
          <p className="card__slogan">{props.sloganProject}</p>
          <h3 className="card__descriptionTitle">Product description</h3>
          <p className="card__description">{props.descProject}</p>

          <div className="card__technicalInfo">
            <p className="card__technologies">{props.technologies}</p>

            <a
              className="icon icon__www"
              href={props.demoProject}
              title="Haz click para ver el proyecto online"
            >
              Web link
            </a>
            <a
              className="icon icon__github"
              href={props.repoProject}
              title="Haz click para ver el código del proyecto"
            >
              GitHub link
            </a>
          </div>
        </div>
      </article>
    </>
  );
}

export default Preview;
