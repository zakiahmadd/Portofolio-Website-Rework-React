import React from "react";

function MoreLink() {
  return (
    <>
      <style>
        {`
          .more-link {
            font-size: 15px;
            margin-top: 5px;
            display: flex;
            align-items: center;
            transition: all 0.3s ease;
            text-decoration: none;
            color: black;
          }
          .more-link:hover {
            transform: scale(1.1) translate(20px);
            color: #5bc0de;
          }
          .more-link i {
            font-size: 16px;
          }
        `}
      </style>
      <a href="#" className="more-link">
        Learn More<i className="bx bx-right-arrow-alt"></i>
      </a>
    </>
  );
}

export default MoreLink;