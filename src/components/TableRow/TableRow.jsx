import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
//import { Test } from './TableRow.styles';

const TableRow = (props) => (
  <div className="TableRowWrapper">
    Test content
  </div>
);

TableRow.propTypes = {
  // bla: PropTypes.string,
};

TableRow.defaultProps = {
  // bla: 'test',
};

const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TableRow);
