import React from "react";
import rulesImage from "../../assets/images/image-rules-bonus.svg";
import closeIcon from "../../assets/images/icon-close.svg";

interface RulesModalProps {
  onClose: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-white md:bg-black/50 flex items-center justify-center z-50">
      <div className="w-full h-full flex flex-col justify-center items-center relative p-8 md:bg-white md:h-auto md:max-w-lg md:rounded-lg md:justify-start">
        <h2 className="text-3xl font-bold uppercase text-[hsl(229,25%,31%)]  absolute top-20 left-1/2 -translate-x-1/2 md:relative md:top-auto md:left-[10%] md:transform-none md:self-start md:mb-8">
          Rules
        </h2>

        <img
          src={rulesImage}
          alt="Rock crushes lizard, rock crushes scissors. Paper covers rock, paper disproves Spock. Scissors cuts paper, scissors decapitates lizard. Lizard eats paper, lizard poisons Spock. Spock smashes scissors, Spock vaporizes rock."
          className="mx-auto"
        />

        <button
          onClick={onClose}
          aria-label="Close rules modal"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 md:top-9 md:right-8 md:bottom-auto md:left-auto md:transform-none"
        >
          <img src={closeIcon} alt="Close" />
        </button>
      </div>
    </div>
  );
};

export default RulesModal;
