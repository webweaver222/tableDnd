import React from "react";

import ColumnHeaderContainer from "./Container";

const ColumnHeader = ({ cols, header, overlayedColumn, setReference }) => {
  return (
    <th
      draggable
      ref={setReference}
      className={`${overlayedColumn === header ? "overlayed" : ""}`}
    >
      {cols[header]}
    </th>
  );
};

export default ColumnHeaderContainer(ColumnHeader);
