import React from "react";
import "./HeaderItem.css";

function HeaderItem(props) {
    return <a href={props.href}>{props.text}</a>
}

export default HeaderItem;