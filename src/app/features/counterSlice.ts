import { counterNamespace, CounterStateType } from "./counterType";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { CounterModel } from "../models/CounterModel";

export const initialState: CounterStateType = {
  counters: [
    { id: 1, value: 0 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
    { id: 5, value: 0 },
  ],
  loading: false,
  totalItems: 0,
};

export const counterSlice = createSlice({
  name: counterNamespace,

  initialState: initialState,

  reducers: {
    counterIncrementAction: (state, action: PayloadAction<CounterModel>) => {
      // console.log("action payload", action.payload);
      const index = state.counters.findIndex((c) => c.id === action.payload.id);
      state.counters[index].value++;
      syncTotalValues(state);
      // state.totalItems = state.counters.reduce((a, b) => a + b.value, 0);
    },

    counterDecrementAction: (state, action: PayloadAction<CounterModel>) => {
      const index = state.counters.findIndex((c) => c.id === action.payload.id);
      state.counters[index].value--;
      syncTotalValues(state);
      // state.totalItems = state.counters.reduce((a, b) => a + b.value, 0);
    },

    counterDeleteAction: (state, action: PayloadAction<CounterModel>) => {
      state.counters = state.counters.filter((c) => c.id !== action.payload.id);
      syncTotalValues(state);
      // state.totalItems = state.counters.reduce((a, b) => a + b.value, 0);
    },

    resetBarAction: (state, action: PayloadAction) => {
      state.counters = state.counters.map((counter) => {
        counter.value = 0;
        return counter;
      });
      syncTotalValues(state);
      // state.totalItems = state.counters.reduce((a, b) => a + b.value, 0);
    },
  },

  extraReducers: {},
});

export const {
  counterIncrementAction,
  counterDecrementAction,
  counterDeleteAction,
  resetBarAction,
} = counterSlice.actions;

export default counterSlice.reducer;

const syncTotalValues = (state: Draft<any>) =>
  (state.totalItems = state.counters.reduce(
    (a: any, b: CounterModel) => a + b.value,
    0
  ));
