import React, {useState} from "react";
import Card from "./Helpers/Card";
import ListContainer from "./ListContainer";
import ListItemForm from "./ListItemForm";

import classes from "./css/App.module.scss";

const App = (props) => {
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

  return (
    <div className={classes.app}>
      <Card>
        <h1 className={classes.headline}>TODO list</h1>
        <ListItemForm data={getListItems} />
        {listArray.length > 0 ? <ListContainer deleteItemHandler={onClickDeleteHandler} list={listArray} /> : ''} 
      </Card>
    </div>
  );
}

export default App;
