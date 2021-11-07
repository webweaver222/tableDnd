import React, { useEffect, useCallback } from "react";
import { connect } from "react-redux";

import { startCols, swapCols, enterCols } from "src/actionCreators.js";

import useDidMountEffect from "src/components/customHooks/didMountEffect";

const mapStateToProps = ({ overlayedColumn }) => ({
  overlayedColumn,
});

const mapDispatchToProps = (dispatch) => ({
  onDragStart: (header) => dispatch(startCols(header)),

  onDragEnter: (header) => dispatch(enterCols(header)),

  onDragStop: () => dispatch("COLUMN_DRAG_STOP"),

  onDragEnd: (header) => dispatch(swapCols(header)),
});

const ColumnHeaderContainer = (Wrapped) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )((props) => {
    const { header, onDragStart, onDragEnter, onDragStop, onDragEnd } = props;

    let tableHeader;

    const dragStart = useCallback(function (e) {
      const dragStartHeader = this.getAttribute("data-index");
      e.dataTransfer.setData("text/plain", "col");
      onDragStart(dragStartHeader);
    }, []);

    const dragEnter = useCallback(function (e) {
      if (e.relatedTarget.tagName !== "TH") return;
      const dragEntertHeader = this.getAttribute("data-index");
      onDragEnter(dragEntertHeader);
    }, []);

    const dragStop = useCallback(() => {
      onDragStop();
    }, []);

    const dragOver = useCallback((e) => {
      e.preventDefault();
    }, []);

    const dragDrop = useCallback(function (e) {
      const srcElement = e.dataTransfer.getData("text");
      if (srcElement !== "col") return false;

      const dragStartHeader = this.getAttribute("data-index");

      onDragEnd(dragStartHeader);
    }, []);

    const setListeners = useCallback(() => {
      tableHeader.addEventListener("dragstart", dragStart);
      tableHeader.addEventListener("dragenter", dragEnter);
      tableHeader.addEventListener("dragover", dragOver);
      tableHeader.addEventListener("dragend", dragStop);
      tableHeader.addEventListener("drop", dragDrop);
    }, []);

    const removeListeners = useCallback(() => {
      tableHeader.removeEventListener("dragstart", dragStart);
      tableHeader.removeEventListener("dragenter", dragEnter);
      tableHeader.removeEventListener("dragover", dragOver);
      tableHeader.removeEventListener("dragend", dragStop);
      tableHeader.removeEventListener("drop", dragDrop);
    }, []);

    useEffect(() => {
      tableHeader.setAttribute("data-type", "col");
      tableHeader.setAttribute("data-index", header);

      setListeners();
    }, []);

    useDidMountEffect(() => {
      removeListeners();

      tableHeader.setAttribute("data-index", header);

      setListeners();
    }, [header]);

    return (
      <Wrapped
        {...props}
        setReference={(node) => {
          if (node) tableHeader = node;
        }}
      />
    );
  });

export default ColumnHeaderContainer;
