import React from "react";
import TableContainer from "./Container";

const Table = ({ renderRows, renderHeaders }) => {
  return (
    <div className="TableWrapper">
      <table>
        <thead>
          <tr>
            <th className="misc">אפשרויות</th>
            {renderHeaders()}
          </tr>
        </thead>
        <tbody>{renderRows()}</tbody>
      </table>
    </div>
  );
};

export default TableContainer(Table);
