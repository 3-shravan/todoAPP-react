import { useReducer, useState } from "react";
import { TodoItemContext } from "./context-file";



const TodoListReducer = (currTodoList, action) => {
  let newTodoList = currTodoList;
  if (action.type === "NEW_TODO" && action.type.todo !== "") {
    newTodoList = [
      ...currTodoList,
      { mytodo: action.payload.todo, dueDate: action.payload.date },
    ];
  } else if (action.type == "DELETE_TODO") {
    newTodoList = currTodoList.filter(
      (items) => items.mytodo !== action.payload.todo
    );
  }
  return newTodoList;
};



const TodoItemContextProvider = ({ children }) => {
  const [todoList, dispatchTodoList] = useReducer(TodoListReducer, []);
  const addTodo = (todo, date) => {
    const newItemAction = {
      type: "NEW_TODO",
      payload: {
        todo,
        date,
      },
    };

    dispatchTodoList(newItemAction);
  };
  const deleteTodo = (todo) => {
    const deleteAction = {
      type: "DELETE_TODO",
      payload: {
        todo,
      },
    };
    dispatchTodoList(deleteAction);
  };

  return (
    <TodoItemContext.Provider
      value={{
        todoList,
        addTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
