import React, { useEffect }from "react";
import MoreLink from "../../components/MoreLink";
import AOS from 'aos';
import 'aos/dist/aos.css';


function Card(props) {

    useEffect(() => {
    AOS.init();
    }, [])

    return (
        <div className="post-item" data-aos="fade-up">
            <h3>{props.title}</h3>
            <div className="info">
                <h5>{props.postDate}</h5>
                <h5>|</h5>
                <h5>{props.postType}</h5>
            </div>
            <p>{props.description}</p>
            {/* <MoreLink /> */}
        </div>
    )
}

export default Card;