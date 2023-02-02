import { surpriseMePhrases } from "../constants";

export function getRandomPhrase(phrase) {
  const randomIndex = Math.floor(Math.random() * surpriseMePhrases.length);

  const randomPhrase = surpriseMePhrases[randomIndex];

  if (randomPhrase === phrase) return getRandomPhrase(phrase);

  return randomPhrase;
}
