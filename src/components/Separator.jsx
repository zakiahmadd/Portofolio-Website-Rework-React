import React from "react";
import { Link } from "react-router-dom";

function Separator(props) {
    return (
    <div className="separator" style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px",
    }}>
        <h4>{props.title}</h4>
        <a className="view-all" href={props.to}><Link to={props.to}>View All</Link></a>
    </div>
    )
}

export default Separator;