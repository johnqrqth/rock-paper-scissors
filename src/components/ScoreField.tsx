import React from "react";

interface ScoreFieldProps {
  score: number;
}

const ScoreField: React.FC<ScoreFieldProps> = ({ score }) => {
  return (
    <div className="bg-white rounded-sm px-4 md:px-6 py-1 md:py-2 text-center min-w-[80px]">
      <div className="text-[10px] md:text-sm font-semibold mb-1 tracking-wider text-[hsl(229,64%,46%)]">
        SCORE
      </div>
      <div data-cy="score-value"  className="text-xl md:text-4xl font-barlow font-bold text-[hsl(229,25%,31%)]">{score}</div>
    </div>
  );
};

export default ScoreField;
