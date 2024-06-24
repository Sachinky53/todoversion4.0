function TodoItem1({ todoItems,onDeleteClick }) {
  return (
    <div className="container"> 
      <div className="row kg-row">
        {todoItems.map(todoItem => {
          return (
            <>
              <div className="col-6">{todoItem.name}</div>
              <div className="col-4">{todoItem.dueDate}</div>
             <div className="col-2">
                <button type="button" className="btn btn-danger kg-button" onClick={()=>onDeleteClick(todoItem.name)}>
                  Delete
                </button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default TodoItem1;
