import React, { useState } from "react";
import GameHeader from "../../components/GameHeader";
import GameChoices from "../../components/GameChoice";
import RulesModal from "../../components/modals/RulesModal";
import type { Choice } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import {
  setComputerChoice,
  setUserChoice,
} from "../../redux/gameSlice";
import GameResult from "../../components/GameResult";

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { score, status } = useSelector(
    (state: RootState) => state.game
  );

  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);

  const handleChoiceSelect = (choice: Choice) => {
    dispatch(setUserChoice(choice));

    setTimeout(() => {
      dispatch(setComputerChoice());
    }, 1500); // 1.5 second delay
  };

  return (
    <div className="bg-radial-custom text-white min-h-screen flex flex-col items-center p-8 relative">
      <GameHeader score={score} />

      <main className="w-full flex-grow flex items-center justify-center">
        {status === "picking" ? (
          <GameChoices onChoiceSelect={handleChoiceSelect} />
        ) : (
          <GameResult />
        )}
      </main>

      <button
        onClick={() => setIsRulesModalOpen(true)}
        className="absolute bottom-8 right-8 border-2 border-header-outline text-white uppercase tracking-widest px-10 py-2 rounded-lg hover:bg-white hover:text-[hsl(229,25%,31%)] transition-colors duration-200"
      >
        Rules
      </button>

      {isRulesModalOpen && (
        <RulesModal onClose={() => setIsRulesModalOpen(false)} />
      )}
    </div>
  );
};

export default HomeScreen;
