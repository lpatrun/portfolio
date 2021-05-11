import React from "react";
import "./Projects.css";
import { connect } from "react-redux";

const Projects = (props) => {
  const projectsBlock = props.projs.map((element) => (
    <div className="project-container" key={element.id}>
      <div className="project-image">
        <img src={element.image} alt={element.name} />
      </div>

      <div className={element.classes}>
        <div>
          <h3 className="heading-tertiary">{element.name}</h3>
          <ul>
            {element.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="btnCont">
          <a href={element.code} target="blank">
            <button className="btn-code">
              <p>CODE</p>
            </button>
          </a>
          <a href={element.live} target="blank">
            <button className="btn-live">
              <p>LIVE</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="proj-bckgr">
      <div className="projects">
        <div className="projects-title">
          <h3>Projects</h3>
        </div>
        {projectsBlock}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    projs: state.projects,
  };
};

export default connect(mapStateToProps)(Projects);
