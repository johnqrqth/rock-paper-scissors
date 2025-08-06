import React, { useState } from "react";
import GameHeader from "../../components/GameHeader";
import GameChoices from "../../components/GameChoice";
import RulesModal from "../../components/modals/RulesModal";
import type { Choice } from "../../types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { setComputerChoice, setUserChoice, playAgain } from "../../redux/gameSlice";

const HomeScreen:React.FC = () => {
  const dispatch = useDispatch();
  const { score, status, userChoice, computerChoice, result } = useSelector(
    (state: RootState) => state.game
  );

  const [isRulesModalOpen, setIsRulesModalOpen] = useState(false);


  const handleChoiceSelect = (choice: Choice) => {
    dispatch(setUserChoice(choice));

    setTimeout(() => {
      dispatch(setComputerChoice());
    }, 1500); // 1.5 second delay
  };

  const handlePlayAgain = () => {
    dispatch(playAgain());
  };

  return (
    <div className="bg-radial-custom text-white min-h-screen flex flex-col items-center p-8 relative">
      <GameHeader score={score} />

      <main className="w-full flex-grow flex items-center justify-center">

        {status === "picking" ? (
          <GameChoices onChoiceSelect={handleChoiceSelect} />
        ) : (
          <div className="text-center text-xl">
            <h2 className="text-2xl font-bold mb-4">TESTING RESULT VIEW</h2>
            <p>You Picked: <span className="font-bold uppercase">{userChoice}</span></p>
            
            <p>
              The House Picked: 
              <span className="font-bold uppercase">
                {computerChoice ? computerChoice : " ...thinking"}
              </span>
            </p>

            {result && (
              <div className="mt-8">
                <p className="text-4xl font-bold uppercase mb-4">
                  YOU {result}
                </p>
                <button
                  onClick={handlePlayAgain}
                  className="bg-white text-[hsl(229,25%,31%)] px-12 py-3 rounded-lg font-semibold tracking-wider hover:opacity-90"
                >
                  PLAY AGAIN
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      <button
        onClick={() => setIsRulesModalOpen(true)}
        className="absolute bottom-8 right-8 border-2 border-header-outline text-white uppercase tracking-widest px-10 py-2 rounded-lg hover:bg-white hover:text-[hsl(229,25%,31%)] transition-colors duration-200"
      >
        Rules
      </button>

      {isRulesModalOpen && <RulesModal onClose={() => setIsRulesModalOpen(false)} />}
    </div>
  );
};

export default HomeScreen;
