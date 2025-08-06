import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getSavedScore, saveScoreToStorage } from "../utils";
import type { Choice, GameResult, GameStatus } from "../types";


interface GameState {
  score: number;
  userChoice: Choice | null;
  computerChoice: Choice | null;
  status: GameStatus;
  result: GameResult;
}

const initialState: GameState = {
  score: getSavedScore(),
  userChoice: null,
  computerChoice: null,
  status: "picking", // Start at the 'picking' screen (the pentagon)
  result: null,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // Action to handle the user's pick
    setUserChoice(state, action: PayloadAction<Choice>) {
      state.status = "result"; // Change status to show the result view
      state.userChoice = action.payload;
    },
    // Action for the computer's pick and determining the winner
    setComputerChoice(state) {
      const choices: Choice[] = ["rock", "paper", "scissors", "lizard", "spock"];
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      state.computerChoice = randomChoice;

      // Determine the winner
      if (state.userChoice === state.computerChoice) {
        state.result = "tie";
      } else if (
        (state.userChoice === "scissors" && (state.computerChoice === "paper" || state.computerChoice === "lizard")) ||
        (state.userChoice === "paper" && (state.computerChoice === "rock" || state.computerChoice === "spock")) ||
        (state.userChoice === "rock" && (state.computerChoice === "lizard" || state.computerChoice === "scissors")) ||
        (state.userChoice === "lizard" && (state.computerChoice === "spock" || state.computerChoice === "paper")) ||
        (state.userChoice === "spock" && (state.computerChoice === "scissors" || state.computerChoice === "rock"))
      ) {
        state.result = "WIN";
        state.score += 1;
        saveScoreToStorage(state.score); 
      } else {
        state.result = "LOSE";
        state.score = state.score > 0 ? state.score - 1 : 0;
        saveScoreToStorage(state.score); 
      }
    },
    playAgain(state) {
        state.status = "picking";
        state.userChoice = null;
        state.computerChoice = null;
        state.result = null;
    }
  },
});

export const { setUserChoice, setComputerChoice, playAgain } = gameSlice.actions;

export default gameSlice.reducer;