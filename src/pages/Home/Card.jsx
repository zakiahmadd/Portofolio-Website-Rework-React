import React from "react";
import MoreLink from "../../components/MoreLink";

function Card(props) {
    return (
        <div className="post-item">
            <h3>{props.title}</h3>
            <div className="info">
                <h5>{props.postDate}</h5>
                <h5>|</h5>
                <h5>{props.postType}</h5>
            </div>
            <p>{props.description}</p>
            <MoreLink />
        </div>
    )
}

export default Card;