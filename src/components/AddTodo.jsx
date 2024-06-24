import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDuedate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value)
  }
  const handleDateChange = (event) => {
    setDuedate(event.target.value);
  }
  const handleAddButton = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDuedate("");
  }
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Food here!" value={todoName} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button"
            onClick={handleAddButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;