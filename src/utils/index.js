import { surpriseMePhrases } from "../constants";
import FileSaver from "file-saver";

export function getRandomPhrase(phrase) {
  const randomIndex = Math.floor(Math.random() * surpriseMePhrases.length);

  const randomPhrase = surpriseMePhrases[randomIndex];

  if (randomPhrase === phrase) return getRandomPhrase(phrase);

  return randomPhrase;
}

export async function downloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}
