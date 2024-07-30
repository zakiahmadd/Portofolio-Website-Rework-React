import Header from "../../components/Header/Header.jsx";
import React, { useState } from "react";
import Card from "./Card.jsx";
import Separator from "../../components/Separator.jsx";
import ProjectPost from "../../components/ProjectPost.jsx";
import "./Home.css";
import postData from "../../data/post-data.jsx";
import projectData from "../../data/project-data.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function HomePage() {
  const usedPostData = postData.slice(-2);

  return (
    <>
      <Header />
      <div className="main">
        <div className="info">
          <p className="hello">Padjadjaran University</p>
          <h1>
            Zaki Ahmad
            <br />
            Web Developer
          </h1>
          <p className="desc">
            An undergraduate student majoring in Actuarial Science. Passionate
            in Software Development especially Web Development. Eager to explore
            the Software Development world.
          </p>
          <div className="contacts-logo">
            <a
              href="https://github.com/zakiahmadd?tab=repositories"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/zaki-ahmad-2a7b3424b/"
              target="_blank"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a href="/contact">
              <i className="bx bxs-envelope"></i>
            </a>
            <a href="https://www.instagram.com/zakiahmaadd/" target="_blank">
              <i className="bx bxl-instagram-alt"></i>
            </a>
          </div>
        </div>
        <img src="../../src/assets/berdiri.JPG" alt="picture of me" />
      </div>

      <div className="recent">
        <Separator title="Recent Post" to="/posts"/>
        <div className="posts">
          {usedPostData.map((post) => {
            return (
              <Card
                title={post.title}
                postDate={post.date}
                postType={post.postType}
                description={post.description}
              />
            );
          })}
        </div>
      </div>

      <div class="featured">
        <Separator title="Featured Projects" to="/projects" />
        <div class="projects" >
          {projectData.map((post) => {
            return (
              <ProjectPost
                title={post.title}
                year={post.year}
                tags={post.tags}
                description={post.description}
                img={post.imgSrc}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
