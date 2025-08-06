import React, { useState } from "react";
import GameHeader from "../../components/GameHeader";
import GameChoices from "../../components/GameChoice";

const HomeScreen = () => {
  const [score, setScore] = useState<number>(10);

  const handleRulesClick = () => {
    // You can add the logic to show a rules modal here
    console.log("Rules button clicked!");
  };
  return (
    <div className="bg-radial-custom h-[100vh] w-[100vw] flex flex-col items-center relative">
      <GameHeader score={score} />
      <GameChoices onChoiceSelect={() => {}} />

      <button
        onClick={handleRulesClick}
        className="absolute bottom-8 right-8 border-2 border-header-outline text-white uppercase tracking-widest px-10 py-2 rounded-lg hover:bg-white hover:text-primary-dark transition-colors duration-200"
      >
        Rules
      </button>
    </div>
  );
};

export default HomeScreen;
