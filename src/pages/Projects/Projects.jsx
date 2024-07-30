import React from "react";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Separator from "../../components/Separator.jsx";
import ProjectPost from "../../components/ProjectPost.jsx";
import projectData from "../../data/project-data.jsx";
// import "./ProjectsPage.css"; // Make sure to create this CSS file

function ProjectsPage() {
  return (
    <>
      <style>
        {`
          .featured {
            padding: 40px 148px;
          }
        `}
      </style>
      <Header />
      <div className="featured">
        <Separator
          title="Projects"
          fontSize="25px"
        />
        <div className="projects">
          {projectData.map((post, index) => (
            <ProjectPost
              key={index}
              title={post.title}
              year={post.year}
              tags={post.tags}
              description={post.description}
              img={post.imgSrc}
              more={post.more}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectsPage;
