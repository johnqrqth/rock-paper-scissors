import React, { useEffect, useState } from "react";
import GameHeader from "../../components/GameHeader";
import GameChoices from "../../components/GameChoice";
import RulesModal from "../../components/modals/RulesModal";
import { getSavedScore, saveScoreToStorage } from "../../utils";

const HomeScreen: React.FC = () => {
    const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);
    const [score, setScore] = useState<number>(getSavedScore());

    useEffect(() => {
    saveScoreToStorage(score);
  }, [score]); 

  const handleRulesClick = () => {
    console.log("Rules button clicked!");
    setIsRulesModalOpen(true);
  };

  const handleChoiceSelect = (choice: Choice) => {
    console.log(choice);
  };
  return (
    <div className="bg-radial-custom h-[100vh] w-[100vw] flex flex-col items-center relative">
      <GameHeader score={score} />
      <GameChoices onChoiceSelect={handleChoiceSelect} />

      <button
        onClick={handleRulesClick}
        className="absolute bottom-8 right-8 border-2 border-header-outline text-white uppercase tracking-widest px-10 py-2 rounded-lg hover:bg-white hover:text-primary-dark transition-colors duration-200"
      >
        Rules
      </button>

      {isRulesModalOpen && <RulesModal onClose={() => setIsRulesModalOpen(false)} />}
    </div>
  );
};

export default HomeScreen;
