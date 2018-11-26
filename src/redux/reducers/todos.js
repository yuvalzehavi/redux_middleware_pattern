import { UPDATE_TODOS } from "../actions/todos";

export function todosReducer(todos = [], action) {

  switch (action.type) {

    case UPDATE_TODOS:
      return [...todos, action.payload];

    default:
      return todos;
  }
}
