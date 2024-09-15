import { createContext } from "react";

export const TodoItemContext = createContext({
  todoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
});



