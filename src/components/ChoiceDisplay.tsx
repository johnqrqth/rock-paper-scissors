import type { Choice } from "../types";
import { choiceDetails } from "../utils/choices";

export const ChoiceDisplay: React.FC<{
  label: string;
  choice: Choice | null;
  isWinner?: boolean;
}> = ({ label, choice, isWinner = false }) => {
  const data = choice ? choiceDetails[choice] : null;
  const labelDataCy = label.toLowerCase().replace(" ", "-") + "-label";

  return (
    <div className="flex flex-col-reverse md:flex-col items-center gap-y-4">
      <p data-cy={labelDataCy} className="text-white uppercase tracking-widest text-sm md:text-lg font-semibold">
        {label}
      </p>
      <div className="relative w-32 h-32 md:w-56 md:h-56">
        {isWinner && (
          <div className="absolute inset-[-0rem] rounded-full 
                        shadow-[0_0_0_25px_rgba(255,255,255,0.05),_0_0_0_50px_rgba(255,255,255,0.04),_0_0_0_80px_rgba(255,255,255,0.03)] 
                        md:shadow-[0_0_0_50px_rgba(255,255,255,0.05),_0_0_0_100px_rgba(255,255,255,0.04),_0_0_0_160px_rgba(255,255,255,0.03)] z-0">
          </div>
        )}
        {data ? (
          <div className={`relative w-full h-full rounded-full ${data.gradient} ${data.shadow} z-10`}>
            <div className="w-full h-full rounded-full p-4 md:p-6">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center shadow-[inset_0_6px_rgba(0,0,0,0.15)]">
                <img src={data.icon} alt={choice || ""} className="h-12 md:h-20" />
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