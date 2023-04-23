import Card from "./Helpers/Card";
import ListContainer from "./List/ListContainer";
import ListItemForm from "./List/ListItemForm";
import { useSelector } from "react-redux";
import classes from "./css/App.module.scss";

const App = () => {
  const todos = useSelector(state => state.todos)

  return (
    <div className={classes.app}>
      <Card>
        <h1 className={classes.headline}>&#9745; TODO list</h1>
        <ListItemForm list={todos} />
        {todos.length > 0 && <ListContainer />}
      </Card>
      <div style={{ textAlign: "right" }}>v2.1</div>
    </div>
  );
}

export default App;
