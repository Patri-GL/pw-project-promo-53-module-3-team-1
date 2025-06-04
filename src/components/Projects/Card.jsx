import Preview from "./PreviewCard";

function Card(props) {
  return (
    <>
      <section className="preview">
        <div className="projectImage"></div>
        <Preview
          name={props.name}
          slogan={props.slogan}
          repo={props.repo}
          demo={props.demo}
          technologies={props.technologies}
          desc={props.desc}
          author={props.author}
          job={props.job}
        />
      </section>
    </>
  );
}

export default Card;
