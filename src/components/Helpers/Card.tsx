
import cardClasses from "../css/Card.module.scss";

type CardComponentType = {
    className?: string,
    children?: React.ReactNode
}

const Card = ({ className, children }: CardComponentType) => {
    const classes = className ? `${cardClasses.card} ${className}` : `${cardClasses.card}`
    return <div className={classes}>
        {children}
    </div>
}

export default Card;