import React, { useEffect } from "react";
import TableRow from "src/components/TableRow";
import { connect } from "react-redux";

const Table = ({ tableData, cols }) => {
  //console.log(tableData);
  const rednderRows = () =>
    tableData.map((row, i) => <TableRow row={row} i_row={i} key={i + "row"} />);

  return (
    <div className="TableWrapper">
      <table>
        <thead>
          <tr>
            <th className="misc">אפשרויות</th>
            {Object.keys(cols)
              .reverse()
              .map((key, i) => (
                <th key={i + "col"} draggable>
                  {cols[key]}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>{tableData.length > 0 && rednderRows()}</tbody>
      </table>
    </div>
  );
};

const mapStateToProps = ({ tableData, cols }) => ({
  tableData,
  cols,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, null)(Table);
