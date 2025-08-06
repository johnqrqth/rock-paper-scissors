import React from "react";
import scissors from ".././assets/images/icon-scissors.svg";
import spock from ".././assets/images/icon-spock.svg";
import paper from ".././assets/images/icon-paper.svg";
import lizard from ".././assets/images/icon-lizard.svg";
import rock from ".././assets/images/icon-rock.svg";
import pentagonBg from ".././assets/images/bg-pentagon.svg";
import type { Choice } from "../types";
import { choiceData, choiceDetails } from "../utils/choices";

interface GameChoicesProps {
  onChoiceSelect: (choice: Choice) => void;
  disabled?: boolean;
}

const GameChoices: React.FC<GameChoicesProps> = ({
  onChoiceSelect,
  disabled = false,
}) => {
  const handleChoiceClick = (choice: Choice): void => {
    if (!disabled) {
      onChoiceSelect(choice);
    }
  };

  return (
    <div className="relative w-80 h-80 mx-auto mt-24">
      <img
        src={pentagonBg}
        alt=""
        className="absolute w-56 h-56 top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
      />
      {choiceData.map((choice) => (
        <button
          key={choice.id}
          onClick={() => handleChoiceClick(choice.id)}
          disabled={disabled}
          className={`
            absolute w-24 h-24 rounded-full shadow-lg transition-all duration-200 
            hover:scale-105 active:scale-95 disabled:cursor-not-allowed
            ${choice.gradient} ${choice.position} ${choice.shadow}
          `}
          aria-label={`Select ${choice.id}`}
        >
          <div className="w-full h-full rounded-full p-3">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-shadow-[inset_0_4px_rgba(0,0,0,0.15)]">
              <img src={choice.icon} alt={choice.id} className="h-10" />
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default GameChoices;
