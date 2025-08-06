import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playAgain } from "../redux/gameSlice";
import type { RootState } from "../redux/store";
import { ChoiceDisplay } from "./ChoiceDisplay";

const GameResult: React.FC = () => {
  const dispatch = useDispatch();
  const { userChoice, computerChoice, result } = useSelector(
    (state: RootState) => state.game
  );
  const [showResultText, setShowResultText] = useState(false);

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => setShowResultText(true), 500);
      return () => clearTimeout(timer);
    }
  }, [result]);

  const handlePlayAgain = () => {
    dispatch(playAgain());
  };

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 justify-items-center items-center gap-x-8 gap-y-16 md:gap-x-16">
      <ChoiceDisplay
        label="You Picked"
        choice={userChoice}
        isWinner={result === "WIN"}
      />

      {showResultText && (
        <div className="w-full md:w-auto order-last col-span-2 md:order-none md:col-span-1 text-center">
          <p
            data-cy="game-result-text"
            className="text-5xl font-bold uppercase text-white mb-4"
          >
            YOU {result}
          </p>
          <button
            data-cy="play-again-button"
            onClick={handlePlayAgain}
            className="bg-white text-[hsl(229,25%,31%)] mb-5 px-12 py-3 rounded-lg font-semibold tracking-wider hover:opacity-90 transition-opacity"
          >
            PLAY AGAIN
          </button>
        </div>
      )}

      <ChoiceDisplay
        label="The House Picked"
        choice={computerChoice}
        isWinner={result === "LOSE"}
      />
    </div>
  );
};

export default GameResult;