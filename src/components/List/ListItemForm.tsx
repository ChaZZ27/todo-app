import { useRef, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/todoSlice";

import classes from "../css/ListItemForm.module.scss";

const ListItemForm = () => {
    const inputVal = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();


    const onFormSubmitHandler = (e: FormEvent) => {
        e.preventDefault();

        const itemText = inputVal.current?.value 

        if(itemText) {
            dispatch(addTodo({
                text: itemText
            }));
            
            inputVal.current!.value = '';
            inputVal.current!.focus();
        }
    }

    return (
        <form onSubmit={onFormSubmitHandler} className={classes['list-item-form']}>
            <input ref={inputVal} required id="input-description" type="text" placeholder="What we need to do?" className={classes['list-item-form-input']} />
            <div className={classes['form-buttons']}>
                <button type="submit" className={classes['form-button']}>Add new item</button>
            </div>
        </form>
    )
}

export default ListItemForm;