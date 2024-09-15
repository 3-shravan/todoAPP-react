import React, { useContext } from "react";
import RowData from "./RowData";
import { TodoItemContext } from "../store/context-file";

const RowDataItem = () => {
  const { todoList } = useContext(TodoItemContext);
  return todoList.map((todo) => (
    <RowData key={todo.mytodo} todo={todo.mytodo} date={todo.dueDate} />
  ));
};

export default RowDataItem;
