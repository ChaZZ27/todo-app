import React, { useRef } from "react";
import classes from "../css/ListItemForm.module.scss";

const ListItemForm = (props) => {
    const inputVal = useRef();


    const onFormSubmitHandler = (e) => {
        e.preventDefault();

        const itemText = inputVal.current.value,
                itemID = Date.now();

        props.data({
            id: itemID, 
            text: itemText,
            isFinished: false
        })

        inputVal.current.value = '';
        inputVal.current.focus();
    }

    return <form onSubmit={onFormSubmitHandler} className={classes['list-item-form']}>
        <input ref={inputVal} required id="input-description" type="text" placeholder="What we need to do?" className={classes['list-item-form-input']} />
        <div className={classes['form-buttons']}>
            <button type="submit" className={classes['form-button']}>Add new item</button>
        </div>
    </form>
}

export default ListItemForm;