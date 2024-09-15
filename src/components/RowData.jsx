import { useContext } from "react";
import { TodoItemContext } from "../store/context-file";

const RowData = ({ todo, date }) => {
  const { deleteTodo } = useContext(TodoItemContext);
  return (
    <div className="row my-row">
      <div className="col-6 texts">{todo}</div>
      <div className="col-4 texts">{date}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger mybtn "
          onClick={() => deleteTodo(todo, date)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default RowData;
