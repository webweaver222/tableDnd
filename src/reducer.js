const initialState = {
  tableData: [],
  cols: {
    number: "מספר ת.ז",
    name: "שם עובד",
    hours_h: "שעות חריגות",
    hours_ya: "שעות ידינות",
    hours: "שעות",
    hours_overall: "סך הכל שעות",
    //misc: "אפשרויות",
  },
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
