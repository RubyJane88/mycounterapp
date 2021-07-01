import React from "react";
import { useDispatch } from "react-redux";
import { resetBarAction } from "../features/counterSlice";

const ResetBar = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(resetBarAction())}
        className="btn btn-primary btn-sm m-2"
      >
        Reset
      </button>
    </div>
  );
};

export default ResetBar;
