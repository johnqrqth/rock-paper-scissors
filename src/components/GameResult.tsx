import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { playAgain } from "../redux/gameSlice";
import type { RootState } from "../redux/store";
import { ChoiceDisplay } from "./ChoiceDisplay";




const GameResult:React.FC = () => {
  const dispatch = useDispatch();
  const { userChoice, computerChoice, result } = useSelector((state: RootState) => state.game);
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
    <div className="w-full flex justify-center items-center gap-8 md:gap-16 text-center">
      <ChoiceDisplay label="You Picked" choice={userChoice} isWinner={result === "win"} />

      {showResultText && (
        <div className="mx-4 order-first md:order-none">
          <p className="text-5xl font-bold uppercase text-white mb-4">You {result}</p>
          <button
            onClick={handlePlayAgain}
            className="bg-white text-[hsl(229,25%,31%)] px-12 py-3 rounded-lg font-semibold tracking-wider hover:opacity-90 transition-opacity"
          >
            PLAY AGAIN
          </button>
        </div>
      )}

      <ChoiceDisplay label="The House Picked" choice={computerChoice} isWinner={result === "lose"} />
    </div>
  );
};

export default GameResult;