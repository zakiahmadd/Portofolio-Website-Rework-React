import React from "react";

function MoreLink(props) {
  return (
    <>
      <style>
        {`
          .more-link {
            font-size: 15px;
            font-weight: 700;
            margin-top: 5px;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
            text-decoration: none;
            color: black;
            width: 100px
          }
          .more-link:hover {
            transform: scale(1.1);
            color: #5bc0de;
          }
          .more-link i {
            font-size: 16px;
          }
        `}
      </style>
      <a href={props.link} className="more-link" target="_blank">
        Learn More<i className="bx bx-right-arrow-alt"></i>
      </a>
    </>
  );
}

export default MoreLink;
