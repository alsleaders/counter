import React, { useState, useEffect } from "react";

export default function FibWithClass() {
  const [twoAgo, setTwoAgo] = useState(0);
  const [lastOne, setLastOne] = useState(0);
  const [current, setCurrent] = useState(1);
  const [timer, setTimer] = useState(1);

  const [seq, setSeq] = useState([1, 1]);

  const addFibArray = () => {
    setSeq((prevSeq) => {
      const two = prevSeq[prevSeq.length - 2];
      const one = prevSeq[prevSeq.length - 1];
      const next = two + one;
      const rv = prevSeq.concat(next);
      setCurrent(next);
      return rv;
    });
  };

  const addFib = () => {
    setCurrent((prevCurrent) => prevCurrent + lastOne);
    setLastOne(current);
    setTwoAgo(lastOne);
  };

  useEffect(() => {
    setInterval(() => {
      addFibArray();
      setTimer((lastSecond) => lastSecond + 1);
    }, 1000);
  }, 1000);

  return (
    <>
      <h1>Fibonacci Numbers!</h1>
      <main className="be-centered">
        <h3>A new number every second!</h3>
        <p className="display">{current}</p>
        <button
          onClick={() => {
            setSeq([1, 1]);
          }}
        >
          Reset
        </button>
      </main>
    </>
  );
}
