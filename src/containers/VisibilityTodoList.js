import { getVisibleTodos } from "../selectors";
import { bindActionCreators } from "redux";
import * as TodoActions from "../actions";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";

const mapStateToProps = (state) => ({
  filteredTodos: getVisibleTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

const VisibilityTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibilityTodoList;
