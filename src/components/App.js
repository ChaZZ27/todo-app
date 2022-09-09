import React, {useState} from "react";
import Card from "./Helpers/Card";
import ListContainer from "./List/ListContainer";
import ListItemForm from "./List/ListItemForm";

import classes from "./css/App.module.scss";

const App = () => {
  const [listArray, setList] = useState([])

  const getListItems = (data) => {
      setList((prevData => {
        return [...prevData, data]
      }))
  }

  const onClickDeleteHandler = (id) => {
    const listRemovedItem = listArray.filter(item => id !== item.id)
    setList(listRemovedItem);
  }

  const onClickFinishItemHandler = (id) => {
    const listFinishedItem = listArray.map(item => {
      if(item.id === id) {
        item.isFinished = !item.isFinished;
      }
      return item
    })
    return setList(listFinishedItem)
  }

  return (
    <div className={classes.app}>
      <Card>
        <h1 className={classes.headline}>&#9745; TODO list</h1>
        <ListItemForm list={listArray} data={getListItems} />
        {listArray.length > 0 ? <ListContainer deleteItemHandler={onClickDeleteHandler} finishItemHandler={onClickFinishItemHandler} list={listArray} /> : ''} 
      </Card>
    </div>
  );
}

export default App;
