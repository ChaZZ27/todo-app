import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import classes from "../css/ListContainer.module.scss"


const ListContainer = () => {
    const todos = useSelector((state: RootState) => state.todos)

    const finishedItems = [];

    todos.forEach(element => {
        element.isFinished && finishedItems.push(element)
    });

    const listCounterText = todos.length - finishedItems.length === 0 ? 'Nice! All your tasks are finished :) ' : `You have ${todos.length - finishedItems.length} task(s) to finish`

    return <>
        <h3 className={classes['list-counter']}>{listCounterText}</h3>
        <ul className={classes['list-container']}>
            {todos.map((item) => <ListItem key={item.id} id={item.id} text={item.text} isFinished={item.isFinished} />)}
        </ul>
    </>
}

export default ListContainer;