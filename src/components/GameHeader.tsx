import React from "react";
import logoSrc from ".././assets/images/logo-bonus.svg";
import ScoreField from "./ScoreField";

interface GameHeaderProps {
  score: number;
}

const GameHeader: React.FC<GameHeaderProps> = ({ score }) => {
  return (
    <div className="w-full max-w-lg mx-auto p-6">
      <div className="border-2 border-[hsl(217,16%,45%)] rounded-lg p-6 flex justify-between items-center bg-transparent">
        <div className="text-white">
          <img
            src={logoSrc}
            alt="Rock Paper Scissors Lizard Spock"
            className="h-20"
          />
        </div>
        <ScoreField score={score} />
      </div>
    </div>
  );
};

export default GameHeader;
