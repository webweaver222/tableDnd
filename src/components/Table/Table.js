import React, { useEffect } from "react";

import { connect } from "react-redux";

const Table = ({ tableData }) => {
  console.log(tableData);

  return <div className="TableWrapper">Test content</div>;
};

const mapStateToProps = ({ tableData }) => ({
  tableData,
});

const mapDispatchToProps = (dispatch) => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(mapStateToProps, null)(Table);
