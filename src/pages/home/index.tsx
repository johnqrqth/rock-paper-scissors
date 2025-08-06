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
    }, 1500);
  };

  return (
    <div className="bg-radial-custom font-barlow text-white min-h-screen flex flex-col items-center p-6 md:p-8 relative">
      <GameHeader score={score} />

      <main className="w-full flex flex-grow mt-10">
        {status === "picking" ? (
          <GameChoices onChoiceSelect={handleChoiceSelect} />
        ) : (
          <GameResult />
        )}
      </main>

      <button
        onClick={() => setIsRulesModalOpen(true)}
        className="absolute font-barlow bottom-8 border-2 border-header-outline text-white uppercase tracking-widest px-10 py-2 rounded-lg hover:bg-white hover:text-[hsl(229,25%,31%)] transition-colors duration-200 
                   md:right-8 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0"
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