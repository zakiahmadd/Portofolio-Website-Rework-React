import React from "react";
import "./HeaderItem.css";
import { Link } from "react-router-dom";

function HeaderItem(props) {
    return <Link to={props.to}>{props.text}</Link>
}

export default HeaderItem;