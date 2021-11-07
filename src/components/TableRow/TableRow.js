import React from "react";

import TableRowContainer from "./Container";

import graph from "src/resources/svg/graph.svg";
import menu from "src/resources/svg/menu.svg";

const TableRow = ({ row, i_row, cols, overlayedRow, setReference }) => {
  return (
    <tr
      className={`${row["state"]} ${
        overlayedRow === row.id ? "overlayed" : ""
      } `}
      draggable
      ref={setReference}
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

export default TableRowContainer(TableRow);
