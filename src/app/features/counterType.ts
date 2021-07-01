import { CounterModel } from "../models/CounterModel";

export type CounterStateType = {
  readonly counters: CounterModel[];
  readonly loading: boolean;
};

export const counterNamespace = "counters";
