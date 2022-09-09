import React from "react";
import ListItem from "./ListItem";
import classes from "../css/ListContainer.module.scss"

const ListContainer = (props) => {

    const finishedItems = [];

    props.list.forEach(element => {
        element.isFinished && finishedItems.push(element)
    });

    return <>        
        <h3 key={props.list} className={classes['list-counter']}>{props.list.length - finishedItems.length === 0 ? 'Nice! All your tasks are finished :) ' : `You have ${props.list.length - finishedItems.length} task(s) to finish`}</h3>
        <ul className={classes['list-container']}>
            {props.list.map((item) => <ListItem key={item.id} 
                                                    id={item.id}
                                                    deleteItem={props.deleteItemHandler}
                                                    text={item.text}
                                                    finishItem={props.finishItemHandler}
                                                    isFinished={item.isFinished}
                                                    /> )}
        </ul>
    </>
}

export default ListContainer;