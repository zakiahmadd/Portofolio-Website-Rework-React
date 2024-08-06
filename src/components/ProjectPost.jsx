import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import MoreLink from "./MoreLink.jsx";

function ProjectPost(props) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <style>
        {`
      .project-item {
        display: flex;
        border-bottom: #222831 1px solid;
        justify-content: center;
        align-items: center;
        padding: 30px 30px;
      }

      .project-item img {
        height: auto;
        width: 350px;
        border-radius: 7px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
      }

      .project-info {
        margin-left: 20px;
      }

      .project-year {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;
        font-size: 18px;
      }

      .year {
        background-color: #5bc0de;
        padding: 2px 8px;
        border-radius: 20px;
      }

      h5 {
        font-size: 15px;
      }

      h3 {
        font-size: 21px;
      }

      @media screen and (max-width: 1400px) {
        .project-item {
          width: 90%;
        }
      }

      @media screen and (max-width: 992px) {
        .project-item {
          flex-direction: column;
          margin-bottom: 30px;
          width: 85%;
        }

        .project-item img {
          width: 90%;
          margin-bottom: 20px;
        }

        h5 {
        font-size: 15px;
      }

      }
      
      @media screen and (max-width: 500px) {
        .project-item {
            width: 100%;
        }
      }
    `}
      </style>
      <div
        class="project-item"
        data-aos="fade-left"
        data-aos-once="false"
        data-aos-easing="ease"
      >
        <img src={props.img} alt="" />
        <div class="project-info">
          <h3>{props.title}</h3>
          <div class="project-year">
            <h5 class="year">{props.year}</h5>
            <h5>{props.tags}</h5>
          </div>
          <p>{props.description}</p>
          {props.more ? <MoreLink link={props.link} /> : null}
        </div>
      </div>
    </>
  );
}

export default ProjectPost;
