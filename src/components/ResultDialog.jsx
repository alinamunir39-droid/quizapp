import React from "react";
import { Dialog, DialogTitle, DialogContent, Typography, Button } from "@mui/material";

export default function ResultDialog({ open, score, total, handleRestart }) {
  return (
    <Dialog open={open} onClose={handleRestart}>
      <DialogTitle>Quiz Completed!</DialogTitle>
      <DialogContent>
        <Typography variant="h6">
          Your Score: {score} / {total}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleRestart}
          sx={{ mt: 2 }}
        >
          Restart Quiz
        </Button>
      </DialogContent>
    </Dialog>
  );
}
