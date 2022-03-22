import React from "react";
import ListItem from "./ListItem";
import classes from "./css/ListContainer.module.scss"

const ListContainer = (props) => {

    return <>        
        <h3>You have {props.list.length} task(s) left</h3>
        <ul className={classes['list-container']}>
            {props.list.map((item) => <ListItem key={item.id} 
                                                    id={item.id}
                                                    deleteItem={props.deleteItemHandler} 
                                                    text={item.text}/> )}
        </ul>
    </>
}

export default ListContainer;