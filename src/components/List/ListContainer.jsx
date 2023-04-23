import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import classes from "../css/ListContainer.module.scss"

const ListContainer = () => {
    const todos = useSelector(state => state.todos)

    const finishedItems = [];

    todos.forEach(element => {
        element.isFinished && finishedItems.push(element)
    });

    return <>
        <h3 key={todos} className={classes['list-counter']}>{todos.length - finishedItems.length === 0 ? 'Nice! All your tasks are finished :) ' : `You have ${todos.length - finishedItems.length} task(s) to finish`}</h3>
        <ul className={classes['list-container']}>
            {todos.map((item) => <ListItem key={item.id} id={item.id} text={item.text} isFinished={item.isFinished} />)}
        </ul>
    </>
}

export default ListContainer;