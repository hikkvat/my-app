import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "ненужная вещь" },
    { id: 1, value: 0, name: "ложка" },
    { id: 2, value: 0, name: "вилка" },
    { id: 3, value: 0, name: "тарелка" },
    { id: 4, value: 0, name: "набор минималиста" }
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleReset = () => {
    setCounters(initialState);
  };
  const handleIncrement = (id) => {
    const elementIndex = counters.findIndex(counter => counter.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };
    const handleDecrement = (id) => {
    const elementIndex = counters.findIndex(counter => counter.id === id);
    const newCounters = [...counters];
    newCounters[elementIndex].value--;
    setCounters(newCounters);
  };
  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Reset</button>
      {/* <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>Update</button> */}
    </>
  );
};
export default CountersList;
