import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ filteredTodos, actions }) => {
  return (
    <ul className="todo-list">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo} todo={todo} {...actions} />
      ))}
    </ul>
  );
};

export default TodoList;
