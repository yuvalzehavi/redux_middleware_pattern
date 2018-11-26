import { SDK_REQUEST, SDK_REQUEST_FAILURE, actionTypes } from "../actions/sdk";
import { updateTodos } from "../actions/todos";
import * as sdkActions from "../../sdk/mockSDK";

// this middleware is dedicated solely to sdk actions 
export const sdk = ({ dispatch }) => next => action => {
    next(action);

    if (action.type === SDK_REQUEST) {
        const { actionType } = action.meta;
        let actionToBeCalled = '', onSuccess;

        switch (actionType) {
            case actionTypes.GET_FIRST_TODO:
                actionToBeCalled = 'sdkCallExample1';
                onSuccess = updateTodos;
                break;
            case actionTypes.GET_SECOND_TODO:
                actionToBeCalled = 'sdkCallExample2';
                onSuccess = updateTodos;
                break;
        }

        actionToBeCalled !== '' &&
            sdkActions[actionToBeCalled]()
                .then(res => dispatch(onSuccess({ ...res })))
                .catch(error => dispatch({ type: SDK_REQUEST_FAILURE, payload: error }))
    }

};