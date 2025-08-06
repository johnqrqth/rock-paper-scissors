import React from "react";
import logoSrc from ".././assets/images/logo-bonus.svg";
import ScoreField from "./ScoreField";

interface GameHeaderProps {
  score: number;
}

const GameHeader: React.FC<GameHeaderProps> = ({ score }) => {
  return (
    <div className="w-full max-w-md md:max-w-2xl mx-auto">
      <div className="border-2 border-[hsl(217,16%,45%)] rounded-lg md:rounded-xl p-3 md:p-4 flex justify-between items-center bg-transparent">
        <div className="text-white">
          <img
            src={logoSrc}
            alt="Rock Paper Scissors Lizard Spock"
            className="h-10 md:h-20 "
          />
        </div>
        <ScoreField score={score} />
      </div>
    </div>
  );
};

export default GameHeader;
