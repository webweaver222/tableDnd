import React, { useEffect } from "react";
import "./app.sass";

import { connect } from "react-redux";
import json from "mockData.json";

import Table from "../Table";

const App = ({ onInit }) => {
  useEffect(() => {
    onInit(json.products);
  }, []);

  return (
    <div className="test">
      <Table />
    </div>
  );
};

export default connect(null, (dispatch) => ({
  onInit: (data) =>
    dispatch({
      type: "INIT_TABLE",
      payload: {
        data,
      },
    }),
}))(App);
