const initTable = (data) => (dispatch) =>
  dispatch({
    type: "INIT_TABLE",
    payload: {
      data,
    },
  });

const startRow = (id) => (dispatch) =>
  dispatch({
    type: "ROW_DRAG_START",
    payload: {
      id,
    },
  });

const enterRow = (id) => (dispatch) =>
  dispatch({
    type: "ROW_DRAG_ENTER",
    payload: {
      id,
    },
  });

const swapRows = (id) => (dispatch, getState) => {
  const { tableData, draggedRow } = getState();

  const idx1 = tableData.findIndex((el) => el.id === draggedRow);
  const idx2 = tableData.findIndex((el) => el.id === id);

  const newData = [...tableData];

  newData[idx1] = tableData[idx2];
  newData[idx2] = tableData[idx1];

  dispatch({
    type: "ROW_DRAG_END",
    payload: {
      newData,
    },
  });
};

const startCols = (header) => (dispatch) =>
  dispatch({
    type: "COLUMN_DRAG_START",
    payload: {
      header,
    },
  });

const enterCols = (header) => (dispatch) =>
  dispatch({
    type: "COLUMN_DRAG_ENTER",
    payload: {
      header,
    },
  });

const swapCols = (header) => (dispatch, getState) => {
  const { cols, draggedColumn } = getState();

  const newOrder = Object.keys(cols);

  const idx1 = newOrder.findIndex((el) => el === draggedColumn);
  const idx2 = newOrder.findIndex((el) => el === header);

  newOrder[idx1] = header;
  newOrder[idx2] = draggedColumn;

  const newCols = {};

  for (const key of newOrder) {
    newCols[key] = cols[key];
  }

  dispatch({
    type: "COLUMN_DRAG_END",
    payload: {
      newCols,
    },
  });
};

export {
  initTable,
  startRow,
  swapRows,
  startCols,
  swapCols,
  enterRow,
  enterCols,
};
