import type { Choice } from "../types";
import { choiceDetails } from "../utils/choices";

export const ChoiceDisplay: React.FC<{
  label: string;
  choice: Choice | null;
  isWinner?: boolean;
}> = ({ label, choice, isWinner = false }) => {
  const data = choice ? choiceDetails[choice] : null;

  const labelDataCy = label.toLowerCase().replace(' ', '-') + '-label';

  return (
    <div className="flex flex-col items-center">
      <p data-cy={labelDataCy} className="text-white uppercase tracking-widest mb-12 text-lg font-semibold">{label}</p>
      <div className="relative w-40 h-40 md:w-56 md:h-56">
        {isWinner && (
          <div className="absolute inset-[-2rem] rounded-full shadow-[0_0_0_30px_rgba(255,255,255,0.05),_0_0_0_50px_rgba(255,255,255,0.04),_0_0_0_70px_rgba(255,255,255,0.03)] z-0"></div>
        )}
        {data ? (
          <div className={`relative w-full h-full rounded-full shadow-lg ${data.gradient} z-10`}>
            <div className="w-full h-full rounded-full p-4">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-inner">
                <img src={data.icon} alt={choice || ""} className="h-16 md:h-20" />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full rounded-full bg-black bg-opacity-25"></div>
        )}
      </div>
    </div>
  );
};