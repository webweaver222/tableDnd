const initialState = {
  tableData: [],
};

const reducer = (state, action) => {
  if (typeof state === "undefined") {
    return initialState;
  }

  switch (action.type) {
    case "INIT_TABLE": {
      return {
        ...state,
        tableData: action.payload.data,
      };
    }

    case "ROW_DRAG_START": {
      return {
        ...state,
        currentTime: action.payload,
      };
    }

    default:
      return state;
  }
};

export default reducer;
