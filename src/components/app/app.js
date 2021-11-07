import React, { useEffect } from "react";

import { connect } from "react-redux";
import json from "mockData.json";

import Table from "../Table";

import { initTable } from "src/actionCreators";

const App = ({ onInit }) => {
  useEffect(() => {
    onInit(json.rows);
  }, []);

  return (
    <div className="app">
      <Table />
    </div>
  );
};

export default connect(null, (dispatch) => ({
  onInit: (data) => dispatch(initTable(data)),
}))(App);
