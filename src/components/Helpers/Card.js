import React from "react";
import cardClasses from "../css/Card.module.scss";

const Card = (props) => {
    const classes = props.className ? `${cardClasses.card} ${props.className}` : `${cardClasses.card}`
    return <div className={classes}>
        {props.children}
    </div>
}

export default Card;