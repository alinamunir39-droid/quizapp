import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import QuizCard from "./components/QuizCard";
import ResultDialog from "./components/ResultDialog";
import questions from "./data/questions";

export default function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setScore(0);
    setShowResult(false);
  };

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Physics Test
      </Typography>

      {!showResult && (
        <QuizCard question={questions[current]} handleAnswer={handleAnswer} />
      )}

      <ResultDialog
        open={showResult}
        score={score}
        total={questions.length}
        handleRestart={handleRestart}
      />
    </Container>
  );
}
