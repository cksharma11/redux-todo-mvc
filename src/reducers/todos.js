import {
  ADD_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED,
  EDIT_TODO,
  DELETE_TODO
} from "../constants/ActionTypes";

const initialState = [
  {
    text: "Use Redux",
    completed: false,
    id: 0,
  },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxID, todo) => Math.max(todo.id, maxID), -1) + 1,
          completed: false,
          text: action.text,
        },
      ];

    case COMPLETE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case EDIT_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.id);

    case COMPLETE_ALL_TODOS:
      return state.map((todo) => ({ ...todo, completed: true }));

    case CLEAR_COMPLETED:
      return state.filter((todo) => todo.completed === false);

    default:
      return state;
  }
}
