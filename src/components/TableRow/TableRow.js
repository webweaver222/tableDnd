import React, { useEffect } from "react";
import { connect } from "react-redux";

import graph from "src/resources/svg/graph.svg";
import menu from "src/resources/svg/menu.svg";

const TableRow = ({ row, i_row, cols }) => {
  //console.log(row);

  let tableRow;

  useEffect(() => {
    tableRow.addEventListener("dragstart", (e) => console.log(e));
    tableRow.addEventListener("dragenter", (e) => console.log(e));
  }, []);

  return (
    <tr
      className={row["state"]}
      draggable
      ref={(node) => {
        if (node) tableRow = node;
      }}
    >
      <td className="misc">
        <table>
          <tbody>
            <tr>
              <td>
                <img src={menu} alt="menu" />
              </td>
              <td>
                {" "}
                <img src={graph} alt="graph" />
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      {Object.keys(cols)
        .reverse()
        .map((key, i) => (
          <td className={key} key={i + key + i_row}>
            {row[key] ? row[key] : "-"}
          </td>
        ))}
    </tr>
  );
};

const mapStateToProps = ({ cols }) => ({
  cols,
});
const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, null)(TableRow);
