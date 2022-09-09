import React from "react";
import classes from "../css/ListItem.module.scss";

const ListItem = (props) => {

    const itemClasses = `${props.isFinished ? [classes['list-item'],  classes['finished']].join(' ') : classes['list-item']}`

    return <li className={itemClasses} data-id={props.id}>
            <p className={classes['list-item-description']}>{props.text}</p>
            <div className={classes['list-item-action']}>
                <button className={classes['btn-remove']} type="button" title="Remove" data-id={props.id} onClick={() => props.deleteItem(props.id)}>&#128465;</button>
                <button className={classes['btn-finish']} type="button" title="Finish" data-id={props.id} onClick={() => props.finishItem(props.id)}>
                    {props.isFinished ? '↺' : '✓'}</button>
            </div>
        </li>
}

export default ListItem;