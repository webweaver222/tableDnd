import React, { useCallback, useEffect } from "react";
import useDidMountEffect from "src/components/customHooks/didMountEffect";

import { startRow, swapRows, enterRow } from "src/actionCreators.js";

import { connect } from "react-redux";

const mapStateToProps = ({ cols, draggedRow, overlayedRow }) => ({
  cols,
  draggedRow,
  overlayedRow,
});

const mapDispatchToProps = (dispatch) => ({
  onDragStart: (id) => dispatch(startRow(id)),

  onDragEnter: (id) => dispatch(enterRow(id)),

  onDragStop: () => dispatch("ROW_DRAG_STOP"),

  onDragEnd: (id) => dispatch(swapRows(id)),
});

const TableRowContainer = (Wrapped) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )((props) => {
    const { row, onDragStart, onDragEnter, onDragStop, onDragEnd } = props;

    let tableRow;

    const dragStart = useCallback(function (e) {
      const dragStartIndex = +this.getAttribute("data-index");
      e.dataTransfer.setData("text/plain", "row");
      onDragStart(dragStartIndex);
    }, []);

    const dragEnter = useCallback(function (e) {
      console.log(e);
      if (e.relatedTarget.tagName !== "TD") return;
      const dragEnterIndex = +this.getAttribute("data-index");
      onDragEnter(dragEnterIndex);
    }, []);

    const dragOver = useCallback(function (e) {
      e.preventDefault();
    }, []);

    const dragStop = useCallback(function (e) {
      onDragStop();
    }, []);

    const dragDrop = useCallback(function (e) {
      //make sure we don't try to drop cols intro rows and otherwise
      const srcElement = e.dataTransfer.getData("text");
      if (srcElement !== "row") return false;

      const dragEndIndex = +this.getAttribute("data-index");

      onDragEnd(dragEndIndex);
    }, []);

    const setListeners = useCallback(() => {
      tableRow.addEventListener("dragstart", dragStart);
      tableRow.addEventListener("dragenter", dragEnter);
      tableRow.addEventListener("dragend", dragStop);
      tableRow.addEventListener("dragover", dragOver);
      tableRow.addEventListener("drop", dragDrop);
    }, []);

    const removeListeners = useCallback(() => {
      tableRow.removeEventListener("dragstart", dragStart);
      tableRow.removeEventListener("dragenter", dragEnter);
      tableRow.removeEventListener("dragend", dragStop);
      tableRow.removeEventListener("dragover", dragOver);
      tableRow.removeEventListener("drop", dragDrop);
    }, []);

    useEffect(() => {
      tableRow.setAttribute("data-index", row.id);
      setListeners();

      return () => removeListeners();
    }, []);

    useDidMountEffect(() => {
      removeListeners();
      tableRow.setAttribute("data-index", row.id);
      setListeners();
      return () => removeListeners();
    }, [row]);

    return (
      <Wrapped
        {...props}
        setReference={(node) => {
          if (node) tableRow = node;
        }}
      />
    );
  });

export default TableRowContainer;
