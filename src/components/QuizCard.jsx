import React from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";

export default function QuizCard({ question, handleAnswer }) {
  return (
    <Card sx={{ maxWidth: 600, mx: "auto", mt: 5, p: 2 }}>
      <CardContent>
        <Typography variant="h6">{question.question}</Typography>
        <Stack spacing={2} sx={{ mt: 2 }}>
          {question.options.map((option) => (
            <Button
              key={option}
              variant="outlined"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
