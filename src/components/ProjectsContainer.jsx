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

          @media screen and (max-width:1400px) {
    
            .featured {
              padding: 40px 60px;
              margin-bottom: 30px;
            } 

            .projects {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            
            .featured .project-item{
              width: 90%;
            }

          }

          @media screen and (max-width: 1200px) {

              .featured {
                  padding: 40px 40px;
              }

          @media screen and (max-width: 992px) {
                .featured {
                  padding: 40px 20px;
              }
          }

          @media screen and (max-width: 768px) {
             .featured .project-item{
              width: 100%;
            }
          }
       

        `}
      </style>
      <div className="featured">
        <Separator title="Featured Projects" to="/projects" view={props.view} />
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
                link={post.link}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProjectsContainer;
