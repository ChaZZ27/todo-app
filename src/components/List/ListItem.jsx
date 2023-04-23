import { useDispatch } from "react-redux";
import { removeTodo, finishTodo } from "../../redux/todoSlice";
import classes from "../css/ListItem.module.scss";

const ListItem = ({ isFinished, id, text }) => {
    const dispatch = useDispatch();
    const itemClasses = `${isFinished ? [classes['list-item'], classes['finished']].join(' ') : classes['list-item']}`;

    const deleteHandler = () => {
        dispatch(removeTodo({
            id: id
        }))
    }

    const finishHandler = () => {
        dispatch(finishTodo({
            id: id,
            isFinished: isFinished
        }))
    }

    return <li className={itemClasses}>
        <p className={classes['list-item-description']}>{text}</p>
        <div className={classes['list-item-action']}>
            <button className={classes['btn-remove']} type="button" title="Remove" data-id={id} onClick={deleteHandler}>&#128465;</button>
            <button className={classes['btn-finish']} type="button" title="Finish" data-id={id} onClick={finishHandler}>
                {isFinished ? '↺' : '✓'}</button>
        </div>
    </li>
}

export default ListItem;