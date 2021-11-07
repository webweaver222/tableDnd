import React from "react";
import { connect } from "react-redux";

import ColumnHeader from "src/components/ColumnHeader";
import TableRow from "src/components/TableRow";

const mapStateToProps = ({ tableData, cols }) => ({
  tableData,
  cols,
});

const TableContainer = (Wrapped) =>
  connect(
    mapStateToProps,
    null
  )((props) => {
    const { tableData, cols } = props;

    const renderRows = () =>
      tableData.length > 0 &&
      tableData.map((row, i) => (
        <TableRow row={row} i_row={i} key={i + "row"} />
      ));

    const renderHeaders = () =>
      Object.keys(cols)
        .reverse()
        .map((key, i) => (
          <ColumnHeader key={i + "col"} cols={cols} header={key} />
        ));

    return (
      <Wrapped
        {...props}
        renderRows={renderRows}
        renderHeaders={renderHeaders}
      />
    );
  });

export default TableContainer;
