import Header from "../../components/Header/Header.jsx";
import React, { useEffect } from "react";
import Card from "./Card.jsx";
import Separator from "../../components/Separator.jsx";
import ProjectsContainer from "../../components/ProjectsContainer.jsx";
import { Link } from "react-router-dom";
import "./Home.css";
import postData from "../../data/post-data.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import profilePic from '../../assets/berdiri.JPG';
import AOS from 'aos';
import 'aos/dist/aos.css';

function HomePage() {
  const usedPostData = postData.slice(-2);

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <Header />
      <div className="main">
        <div className="info" data-aos="fade-right" data-aos-duration="1000">
          <p className="hello">Padjadjaran University</p>
          <h1>
            Zaki Ahmad
            <br />
            Software Developer
          </h1>
          <p className="desc" data-aos="fade" data-aos-delay="500" data-aos-duration="1000">
            An undergraduate student majoring in Actuarial Science. Passionate  
            in Software <br/>Development / Software Engineering. Eager to explore the Software Development world.
          </p>
          <div className="contacts-logo" data-aos="fade" data-aos-delay="1000" data-aos-duration="1000">
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
            <Link to="/contact"><a href="#">
              <i className="bx bxs-envelope"></i>
            </a></Link>
            <a href="https://www.instagram.com/zakiahmaadd/" target="_blank">
              <i className="bx bxl-instagram-alt"></i>
            </a>
          </div>
        </div>
        <img src={profilePic} alt="picture of me" data-aos="fade-left" data-aos-delay="1200" data-aos-duration="1000"/>
      </div>

      <div className="recent">
        <Separator title="Recent Post" to="/posts" view={true}/>
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

      <ProjectsContainer view={true}/>
      <Footer />
    </>
  );
}

export default HomePage;
