import React from "react";

interface ScoreFieldProps {
  score: number;
}

const ScoreField: React.FC<ScoreFieldProps> = ({ score }) => {
  return (
    <div className="bg-white rounded-lg px-8 py-2 text-center min-w-[80px]">
      <div className="text-sm font-semibold mb-1 tracking-wider text-[hsl(229,64%,46%)]">
        SCORE
      </div>
      <div className="text-4xl font-bold text-[hsl(229,25%,31%)]">{score}</div>
    </div>
  );
};

export default ScoreField;
