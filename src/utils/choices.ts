import scissors from "../assets/images/icon-scissors.svg";
import spock from "../assets/images/icon-spock.svg";
import paper from "../assets/images/icon-paper.svg";
import lizard from "../assets/images/icon-lizard.svg";
import rock from "../assets/images/icon-rock.svg";
import type { Choice } from "../types";

export const choiceData = [
  {
    id: "scissors" as Choice,
    icon: scissors,
    gradient: "bg-gradient-to-b from-[hsl(39,89%,49%)] to-[hsl(40,84%,53%)]",
    position: "top-0 left-1/2 transform -translate-x-1/2",
    shadow: "shadow-[0_6px_hsl(39,89%,32%)]",
  },
  {
    id: "paper" as Choice,
    icon: paper,
    gradient: "bg-gradient-to-b from-[hsl(230,89%,62%)] to-[hsl(230,89%,65%)]",
    position: "top-14 right-0",
    shadow: "shadow-[0_6px_hsl(230,89%,52%)]",
  },
  {
    id: "rock" as Choice,
    icon: rock,
    gradient: "bg-gradient-to-b from-[hsl(349,71%,52%)] to-[hsl(349,70%,56%)]",
    position: "bottom-1 right-10",
    shadow: "shadow-[0_6px_hsl(349,71%,39%)]",
  },
  {
    id: "lizard" as Choice,
    icon: lizard,
    gradient: "bg-gradient-to-b from-[hsl(261,73%,60%)] to-[hsl(261,72%,63%)]",
    position: "bottom-1 left-10",
    shadow: "shadow-[0_6px_hsl(261,73%,48%)]",
  },
  {
    id: "spock" as Choice,
    icon: spock,
    gradient: "bg-gradient-to-b from-[hsl(189,59%,53%)] to-[hsl(189,58%,57%)]",
    position: "top-14 left-0",
    shadow: "shadow-[0_6px_hsl(189,59%,43%)]",
  },
];

export const choiceDetails = choiceData.reduce((acc, choice) => {
  acc[choice.id] = {
    icon: choice.icon,
    gradient: choice.gradient,
    shadow: choice.shadow,
  };
  return acc;
}, {} as Record<Choice, { icon: string; gradient: string; shadow: string }>);