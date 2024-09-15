import { useContext } from "react"
import { TodoItemContext } from "../store/context-file"


const Welcome = () => {
  const {todoList}=useContext(TodoItemContext);
  return ( 
   todoList.length===0 &&
    <h1>Your ToDo list is empty!</h1>
  )
}

export default Welcome