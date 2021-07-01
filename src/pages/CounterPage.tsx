import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  counterDecrementAction,
  counterDeleteAction,
  counterIncrementAction,
} from "../app/features/counterSlice";
import { RootState } from "../store/reducers";
import { CounterModel } from "../app/models/CounterModel";
import ResetBar from "../app/components/resetBar";

const CounterPage = () => {
  const dispatch = useDispatch();
  const { counters } = useSelector((state: RootState) => state.counters);

  return (
    <>
      <ResetBar />
      <div className="row">
        {counters?.map((counter: CounterModel) => (
          <div
            key={counter.id}
            className="d-flex flex-row justify-content-center align-items-center"
          >
            <div>
              <span className={getBadgeClasses(counter)}>
                {formatCount(counter)}
              </span>
            </div>
            <button
              className="btn btn-secondary btn-sm m-2"
              onClick={() => dispatch(counterIncrementAction(counter))}
            >
              +
            </button>
            <button
              onClick={() => dispatch(counterDecrementAction(counter))}
              className="btn btn-secondary btn-sm m-2"
              disabled={!counter.value}
            >
              -
            </button>

            <button
              onClick={() => dispatch(counterDeleteAction(counter))}
              className="btn btn-danger btn-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
export default CounterPage;

export const getBadgeClasses = (counter: CounterModel) => {
  let classes = "badge m-2 bg-";
  classes += counter.value === 0 ? "warning" : "secondary";
  return classes;
};

export const formatCount = (counter: CounterModel) => {
  const { value } = counter;
  return value === 0 ? "Zero" : value;
};
