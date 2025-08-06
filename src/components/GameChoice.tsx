import React from "react";
import scissors from ".././assets/images/icon-scissors.svg";
import spock from ".././assets/images/icon-spock.svg";
import paper from ".././assets/images/icon-paper.svg";
import lizard from ".././assets/images/icon-lizard.svg";
import rock from ".././assets/images/icon-rock.svg";
import pentagonBg from ".././assets/images/bg-pentagon.svg";


interface GameChoicesProps {
  onChoiceSelect: (choice: Choice) => void;
  disabled?: boolean;
}

const GameChoices: React.FC<GameChoicesProps> = ({
  onChoiceSelect,
  disabled = false,
}) => {
  const choices = [
    {
      id: "scissors" as Choice,
      icon: scissors,
      gradient: "bg-gradient-to-b from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)]",
      position: "top-0 left-1/2 transform -translate-x-1/2",
    },
    {
      id: "paper" as Choice,
      icon: paper,
      gradient:
        "bg-gradient-to-b from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)]",
      position: "top-14 right-0",
    },
    {
      id: "rock" as Choice,
      icon: rock,
      gradient:
        "bg-gradient-to-b from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)]",
      position: "bottom-1 right-10",
    },
    {
      id: "lizard" as Choice,
      icon: lizard,
      gradient:
        "bg-gradient-to-b from-[hsl(261,73%,60%)] to-[hsl(261,72%,63%)]",
      position: "bottom-1 left-10",
    },
    {
      id: "spock" as Choice,
      icon: spock,
      gradient:
        "bg-gradient-to-b from-[hsl(189,59%,53%)] to-[hsl(189,58%,57%)]",
      position: "top-14 left-0",
    },
  ];

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
      {choices.map((choice) => (
        <button
          key={choice.id}
          onClick={() => handleChoiceClick(choice.id)}
          disabled={disabled}
          className={`
            absolute w-24 h-24 rounded-full shadow-lg transition-all duration-200 
            hover:scale-105 active:scale-95 disabled:cursor-not-allowed
            ${choice.gradient} ${choice.position}
          `}
          aria-label={`Select ${choice.id}`}
        >
          <div className="w-full h-full rounded-full p-2">
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-inner">
              <div>
                <img
                  src={choice.icon}
                  alt={choice.id}
                  className="h-10"
                />
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default GameChoices;