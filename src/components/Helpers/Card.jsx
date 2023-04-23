import cardClasses from "../css/Card.module.scss";

const Card = ({ className, children }) => {
    const classes = className ? `${cardClasses.card} ${className}` : `${cardClasses.card}`
    return <div className={classes}>
        {children}
    </div>
}

export default Card;