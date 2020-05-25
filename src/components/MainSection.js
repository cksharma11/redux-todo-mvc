import React from "react";
import VisibilityTodoList from "../containers/VisibilityTodoList";
import Footer from "./Footer";

const MainSection = ({ todosCount, completedCount, actions }) => {
  return (
    <section className="main">
      {!!todosCount && (
        <span>
          <input
            className="toggle-all"
            type="checkbox"
            checked={completedCount === todosCount}
            readOnly
          />
          <label onClick={actions.completeAllTodos}></label>
        </span>
      )}
      <VisibilityTodoList />
      {!!todosCount && (
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      )}
    </section>
  );
};

export default MainSection;
