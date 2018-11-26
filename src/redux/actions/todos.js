
export const UPDATE_TODOS = '[todos] Update';


export const updateTodos = (data) => ({
  type: UPDATE_TODOS,
  payload: data
});
