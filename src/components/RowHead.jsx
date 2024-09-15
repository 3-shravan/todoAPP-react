import React, { useContext, useRef } from "react";
import { TodoItemContext } from "../store/context-file";

const RowHead = (props) => {
  const { addTodo } = useContext(TodoItemContext);
  const todo = useRef();
  const date = useRef();

  return (
    <div className="row my-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="enter to-do"
          className="my-input"
          ref={todo}
        />
      </div>
      <div className="col-4">
        <input type="date" ref={date} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success mybtn"
          onClick={() => {
            addTodo(todo.current.value, date.current.value);
            todo.current.value = "";
            date.current.value = "";
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default RowHead;
