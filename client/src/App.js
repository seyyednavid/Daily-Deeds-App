import { useEffect, useState } from "react";
import ListHeader from "./components/ListHeader";
import ListItem from "./components/ListItem";
const App = () => {
  const [tasks, setTasks] = useState(null);

  const getData = async () => {
    const userEmail = "navidhejazi68@yahoo.com";
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      setTasks(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => getData, []);

  //Sort by date
  const sortTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <div className="app">
      <ListHeader listName={"🌴 holiday tick list"} getData={getData} />
      {sortTasks?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
    </div>
  );
};

export default App;
