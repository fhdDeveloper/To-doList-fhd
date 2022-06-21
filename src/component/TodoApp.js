import { useEffect, useState } from "react";
import NavBar from "../NavBar";
import TodoForms from "./TodoForms";
import TodoList from "./TodoList";
import { addTodo , deleteTodo , completeTodoAction , updateTodoAction } from "../redux/addTodos/todoSlice";
import { useDispatch, useSelector } from "react-redux";

const TodoApp = () => {
  const dispatch = useDispatch();
  const todosItems = useSelector((state) => state.todoSlice.todos);

  const [filter, setFilter] = useState([]);
  const [value, setValue] = useState("All");

  useEffect(() => {
    filterHandler(value);
  }, [todosItems, value]);


  // add a todos
  const addToHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      isCompleted: false,
    };
    dispatch(addTodo(newTodo))
  };

  // complete todos
  const completeTodo = (id) => {
    const index = todosItems.findIndex((item) => item.id === id);
    const todoItem = { ...todosItems[index] };
    todoItem.isCompleted = !todoItem.isCompleted;
    const newTodos = [...todosItems];
    newTodos[index] = todoItem;
    dispatch(completeTodoAction(newTodos))
  };

  // delete todos
  const deleteHandler = (id) => {
    const filterItem = todosItems.filter((p) => p.id !== id);
    dispatch(deleteTodo(filterItem))

  };

  //update todos
  const updateTodo = (id, input) => {
    const index = todosItems.findIndex((item) => item.id === id);
    const todoItem = { ...todosItems[index] };
    todoItem.text = input;
    const newTodos = [...todosItems];
    newTodos[index] = todoItem;
    dispatch(updateTodoAction(newTodos))
  };

  // filter by select tag
  const filterHandler = (status) => {
    switch (status.value) {
      case "Completed":
        setFilter(todosItems.filter((p) => p.isCompleted));
        break;
      case "UnCompleted":
        setFilter(todosItems.filter((p) => !p.isCompleted));
        break;
      default:
        setFilter(todosItems);
    }
  };

  const valueHandler = (selectedOption) => {
    setValue(selectedOption);
    filterHandler(selectedOption);
  };
    return (
    <div className="container">
      <NavBar
        totlaUncompleted={todosItems.filter((item) => !item.isCompleted).length}
        selectedOption={value}
        valueHandler={valueHandler}
      />
      <TodoForms submitHandler={addToHandler} />
      <TodoList
        todos={filter}
        onComplete={completeTodo}
        onDelete={deleteHandler}
        onUpdateTodo={updateTodo}
      />
    </div>
  );
};

export default TodoApp;
