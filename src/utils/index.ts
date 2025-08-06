/**
 * Retrieves the score from localStorage.
 * @returns {number} The saved score, or a default value of 0 if not found or invalid.
 */
export const getSavedScore = (): number => {
  const savedScore = localStorage.getItem("gameScore");
  if (savedScore) {
    const parsedScore = parseInt(savedScore, 10);
    // Return the parsed score if it's a valid number, otherwise default.
    return !isNaN(parsedScore) ? parsedScore : 0;
  }
  return 12;
};

/**
 * Saves the given score to localStorage.
 * @param {number} score The score to save.
 */
export const saveScoreToStorage = (score: number): void => {
  localStorage.setItem("gameScore", score.toString());
};