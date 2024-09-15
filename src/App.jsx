import Heading from "./components/Heading";
import RowHead from "./components/RowHead";
import RowDataItem from "./components/RowDataItem";
import { useReducer, useState } from "react";
import Welcome from "./components/Welcome";
// import { TodoItemContext, TodoItemContextProvider } from "./store/context-file";
import TodoItemContextProvider from "./store/TodoItemContextProvider";

// const TodoListReducer = (currTodoList, action) => {
//   let newTodoList = currTodoList;
//   if (action.type === "NEW_TODO" && action.type.todo !== "") {
//     newTodoList = [
//       ...currTodoList,
//       { mytodo: action.payload.todo, dueDate: action.payload.date },
//     ];
//   } else if (action.type == "DELETE_TODO") {
//    newTodoList = currTodoList.filter(
//       (items) => items.mytodo !== action.payload.todo
//     );
//   }
//   return newTodoList;
// };

function App() {
  //------------------------------------------------------------------

  // const [todoList, dispatchTodoList] = useReducer(TodoListReducer, []);
  // const addTodo = (todo, date) => {
  //   const newItemAction = {
  //     type: "NEW_TODO",
  //     payload: {
  //       todo,
  //       date,
  //     },
  //   };

  //   dispatchTodoList(newItemAction);
  // };
  // const deleteTodo = (todo) => {
  //   const deleteAction = {
  //     type: "DELETE_TODO",
  //     payload: {
  //       todo,
  //     },
  //   };
  //   dispatchTodoList(deleteAction);
  // };

  //------------------------------------------------------------------

  // const [todoList, setTodoList] = useState([]);

  // const addTodo = (todo, date) => {
  //   if (todo !== "") {
  //     const newTodo = { mytodo: todo, dueDate: date };
  //     const newTodoList = [...todoList, newTodo];

  //     setTodoList(newTodoList);
  //   }
  // };

  // const deleteTodo = (todo, date) => {
  //   const newList = todoList.filter(
  //     (items) => todo !== items.mytodo && date !== items.dueDate
  //   );
  //   setTodoList(newList);
  // };

  //------------------------------------------------------------------

  return (
    <TodoItemContextProvider>
      <Heading />
      <div className="container">
        <RowHead />
        <Welcome />
        <RowDataItem />
      </div>
    </TodoItemContextProvider>
  );

  // return (
  //   <TodoItemContext.Provider
  //     value={{
  //       todoList,
  //       addTodo,
  //       deleteTodo,
  //     }}
  //   >
  //     <Heading />
  //     <div className="container">
  //       <RowHead />
  //       <Welcome />
  //       <RowDataItem />
  //     </div>
  //   </TodoItemContext.Provider>
  // );
}
export default App;
