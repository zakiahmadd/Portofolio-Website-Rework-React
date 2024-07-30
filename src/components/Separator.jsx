import React from "react";
import { Link } from "react-router-dom";

function Separator(props) {
  return (
    <>
      <style>
        {`
          .separator {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 30px;
          }
        `}
      </style>
      <div className="separator" style={{ fontSize: props.fontSize }}>
        <h4>{props.title}</h4>
        {props.view ? (
          <Link className="view-all" to={props.to}>
            View All
          </Link>
        ) : null}
      </div>
    </>
  );
}

export default Separator;
