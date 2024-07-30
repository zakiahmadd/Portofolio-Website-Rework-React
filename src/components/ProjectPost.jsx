import React from "react";
import MoreLink from "./MoreLink.jsx";

function ProjectPost(props) {
  return (
    <div
      class="project-item"
      style={{
        display: "flex",
        borderBottom: "#222831 1px solid",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px 30px",
      }}
    >
      <img
        src={props.img}
        alt=""
        style={{
          height: "auto",
          width: "350px",
          borderRadius: "7px",
          boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
        }}
      />
      <div class="project-info" style={{marginLeft: "40px"}}>
        <h3>{props.title}</h3>
        <div
          class="project-year"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <h5
            class="year"
            style={{
              backgroundColor: "#5bc0de",
              padding: "2px 8px",
              borderRadius: "20px",
            }}
          >
            {props.year}
          </h5>
          <h5>{props.tags}</h5>
        </div>
        <p>
          {props.description}
        </p>
        {props.more ? <MoreLink /> : null}
      </div>
    </div>
  );
}

export default ProjectPost;
