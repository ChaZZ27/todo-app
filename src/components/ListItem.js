import React from "react";
import classes from "./css/ListItem.module.scss";

const ListItem = (props) => {

    return <li className={classes['list-item']} data-id={props.id}>
            <p className={classes['list-item-description']}>{props.text}</p>
            <div className={classes['list-item-action']}>
                <button className={classes['btn-remove']} type="button" title="Remove" data-id={props.id} onClick={() => props.deleteItem(props.id)}>Remove</button>
            </div>
        </li>
}

export default ListItem;