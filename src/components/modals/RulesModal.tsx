import React from "react";
import rulesImage from "../../assets/images/image-rules-bonus.svg";
import closeIcon from "../../assets/images/icon-close.svg";

interface RulesModalProps {
  onClose: () => void;
}

const RulesModal: React.FC<RulesModalProps> = ({ onClose }) => {
  return (
    // Modal Overlay
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      {/* Modal Content */}
      <div className="bg-white w-full max-w-md p-8 rounded-lg">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold uppercase text-[hsl(229,25%,31%)]">
            Rules
          </h2>
          <button onClick={onClose} aria-label="Close rules modal">
            <img src={closeIcon} alt="Close" />
          </button>
        </div>
        <img
          src={rulesImage}
          alt="Rock crushes lizard, rock crushes scissors. Paper covers rock, paper disproves Spock. Scissors cuts paper, scissors decapitates lizard. Lizard eats paper, lizard poisons Spock. Spock smashes scissors, Spock vaporizes rock."
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default RulesModal;
