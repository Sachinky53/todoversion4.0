import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem1 from "./components/TodoItem1";
import WelcomeMessage from "./WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item added: ${itemName} Date:${itemDueDate} `) //
    const newTodoItems = { name: itemName, dueDate: itemDueDate }
    setTodoItems(preTodo=>[...preTodo,newTodoItems]);


    let handleDeleteItem=(todoItemName)=>{
      const newTodoItems=todoItems.filter(item=>item.name !==todoItemName)
      setTodoItems(newTodoItems);
    }
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <div className="items-container">
        <TodoItem1 todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItem1>
        {todoItems.length ===0 && <WelcomeMessage></WelcomeMessage>}
      </div>
    </center>
  );
}

export default App;