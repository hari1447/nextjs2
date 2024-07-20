"use client";
import { useState } from "react";
import {
  incrementAsync,
  selectCount,
  selectStatus,
} from "../../lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";

export default function Page() {
  const [incrementAmount, setIncrementAmount] = useState("10");
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const status = useAppSelector(selectStatus);
    return (
      <div>
        <p> {count} </p>
        <button onClick={() => dispatch(incrementAsync(5))}>Add Async</button>
        <input
          aria-label="Set increment amount"
          value={incrementAmount}
          type="number"
          onChange={(e) => {
            setIncrementAmount(e.target.value);
          }}
        />
      </div>)
  }