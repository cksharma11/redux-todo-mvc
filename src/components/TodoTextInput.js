import React, { useState } from "react";
import classnames from "classnames";

const TodoTextInput = ({ newTodo, onSave, placeholder }) => {
  const [todoText, setTodoText] = useState("");

  const handleChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleBlur = (e) => {
    if (newTodo) {
      onSave(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      onSave(text);
      setTodoText("");
    }
  };

  return (
    <input
      className={classnames({
        edit: true,
        "new-todo": newTodo,
      })}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={todoText}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};

export default TodoTextInput;
