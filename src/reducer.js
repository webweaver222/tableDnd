const initialState = {
  tableData: [],
  cols: {
    number: "מספר ת.ז",
    name: "שם עובד",
    hours_h: "שעות חריגות",
    hours_ya: "שעות ידינות",
    hours: "שעות",
    hours_overall: "סך הכל שעות",
  },
  draggedRow: null,
  overlayedRow: null,
  draggedColumn: "",
  overlayedColumn: "",
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
        draggedRow: action.payload.id,
      };
    }

    case "ROW_DRAG_ENTER": {
      return {
        ...state,
        overlayedRow: action.payload.id,
      };
    }

    case "ROW_DRAG_STOP": {
      return {
        ...state,
        overlayedRow: null,
        draggedRow: null,
        overlayedColumn: "",
      };
    }

    case "ROW_DRAG_END": {
      return {
        ...state,
        draggedRow: null,
        overlayedRow: null,
        tableData: action.payload.newData,
      };
    }

    case "COLUMN_DRAG_START": {
      return {
        ...state,
        draggedColumn: action.payload.header,
      };
    }

    case "COLUMN_DRAG_ENTER": {
      return {
        ...state,
        overlayedColumn: action.payload.header,
      };
    }

    case "COLUMN_DRAG_STOP": {
      return {
        ...state,
        overlayedRow: null,
        draggedColumn: "",
        overlayedColumn: "",
      };
    }

    case "COLUMN_DRAG_END": {
      return {
        ...state,
        cols: action.payload.newCols,
        draggedColumn: "",
      };
    }

    default:
      return state;
  }
};

export default reducer;
