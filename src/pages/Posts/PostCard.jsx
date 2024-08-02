import React from "react";

function PostCard(props) {
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const linkToCopy = `https://zakiahmadd.github.io/Portofolio-Website-Rework-React/`; 

  return (
    <div className="posts">
      <div class="post">
        <h3>{props.title}</h3>
        <div className="info">
          <h5>{props.date}</h5>
          <h5>|</h5>
          <h5>{props.type}</h5>
        </div>
        <p>{props.description}</p>
        <div class="button-group">
          {/* <a href="#">
          <i class='bx bxs-heart'></i>
          </a> */}
          <a href="#">
            <i class="bx bxs-copy" onClick={() => copyToClipboard(linkToCopy)}></i>
          </a>
          <a href="#">
            <i class="bx bx-link-alt" onClick={() => copyToClipboard(linkToCopy)}></i>
          </a>
          {/* <a href="">
            <i class="bx bxs-down-arrow"></i>
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default PostCard;
