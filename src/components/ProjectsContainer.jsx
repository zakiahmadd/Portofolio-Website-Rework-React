import React from "react";
import Separator from "./Separator.jsx";
import ProjectPost from "./ProjectPost.jsx";
import projectData from "../data/project-data.jsx";

const projectDataReversed = projectData.reverse();

function ProjectsContainer(props) {
  return (
    <>
      <style>
        {`
          .featured {
            padding: 60px 148px;
          }
        `}
      </style>
      <div className="featured">
        <Separator title="Featured Projects" to="/projects" view={props.view}/>
        <div className="projects">
          {projectDataReversed.map((post, index) => {
            return (
              <ProjectPost
                key={index}
                title={post.title}
                year={post.year}
                tags={post.tags}
                description={post.description}
                img={post.imgSrc}
                more={post.more}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectsContainer;
