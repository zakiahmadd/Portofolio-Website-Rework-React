import React from "react";

function PostCard(props) {
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
                <a href=""><i class='bx bxs-share' ></i></a>
                <a href=""><i class='bx bxs-copy'></i></a>
                <a href=""><i class='bx bx-link-alt' ></i></a>
                <a href=""><i class='bx bxs-down-arrow' ></i></a>
            </div>
          </div>
        </div>
    )
}

export default PostCard;