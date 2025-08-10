import React, { useState, useEffect, useRef } from "react";

export default function Solver3X3Page() {
  const [isHolding, setIsHolding] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [scramble, setScramble] = useState("");
  const timerRef = useRef(null);

  useEffect(() => {
    generateScramble();
  }, []);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  const handleKeyDown = (e) => {
    if (e.code === "Space" && !isRunning) {
      setIsHolding(true);
    } else if (e.code === "Space" && isRunning) {
      stopTimer();
    }
  };

  const handleKeyUp = (e) => {
    if (e.code === "Space" && isHolding) {
      startTimer();
      setIsHolding(false);
    }
  };

  const startTimer = () => {
    setTime(0);
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
    generateScramble();
  };

  const generateScramble = () => {
    const moves = ["R", "R'", "R2", "L", "L'", "L2", "U", "U'", "U2", "D", "D'", "D2", "F", "F'", "F2", "B", "B'", "B2"];
    let scr = [];
    let prev = "";
    for (let i = 0; i < 20; i++) {
      let move;
      do {
        move = moves[Math.floor(Math.random() * moves.length)];
      } while (move[0] === prev[0]);
      scr.push(move);
      prev = move;
    }
    setScramble(scr.join(" "));
  };

  const formatTime = (ms) => {
    const seconds = Math.floor(ms / 1000);
    const milliseconds = ms % 1000;
    return `${seconds}.${milliseconds.toString().padStart(3, "0")}`;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <div
      onMouseDown={() => !isRunning && setIsHolding(true)}
      onMouseUp={() => {
        if (!isRunning && isHolding) {
          startTimer();
          setIsHolding(false);
        } else if (isRunning) {
          stopTimer();
        }
      }}
      className="flex flex-col items-center justify-center h-screen select-none"
      style={{
        backgroundColor: isRunning ? "white" : isHolding ? "green" : "red",
        transition: "background-color 0.2s",
        fontFamily: "monospace",
      }}
    >
      <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>{scramble}</h2>
      <h1 style={{ fontSize: "5rem" }}>{formatTime(time)}</h1>
      <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
        Hold space / tap to start, release to stop
      </p>
    </div>
  );
}
