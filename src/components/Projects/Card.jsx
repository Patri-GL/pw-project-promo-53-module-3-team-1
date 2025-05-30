import Preview from "./PreviewCard";

function Card(props) {
  return (
    <>
      <section className="preview">
        <div className="projectImage"></div>
        <Preview
          nameProject={props.nameProject}
          sloganProject={props.sloganProject}
          repoProject={props.repoProject}
          demoProject={props.demoProject}
          technologies={props.technologies}
          descProject={props.descProject}
          authorProject={props.authorProject}
          jobProject={props.jobProject}
        />
      </section>
    </>
  );
}

export default Card;
