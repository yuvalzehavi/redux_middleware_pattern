export const SDK_REQUEST = '[sdk] SDK Request';
export const SDK_REQUEST_FAILURE = '[sdk] SDK Request failure';

export const actionTypes = {
  GET_FIRST_TODO: '[sdk] get first todo',
  GET_SECOND_TODO: '[sdk] get second todo'
}

export const getFirstTodo = () => ({
  type: SDK_REQUEST,
  meta: { actionType: actionTypes.GET_FIRST_TODO }
})

export const getSecondTodo = () => ({
  type: SDK_REQUEST,
  meta: { actionType: actionTypes.GET_SECOND_TODO }
})
