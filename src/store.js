import { createStore, applyMiddleware } from "redux";

import reducer from "./reducer";

const stringMdw = () => (dispatch) => (action) => {
  console.log(action.type);
  if (typeof action === "string")
    return dispatch({
      type: action,
    });

  return dispatch(action);
};

const store = createStore(reducer, applyMiddleware(stringMdw));

export default store;
