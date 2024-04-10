/**
 *
 * @param {*} currentParagraph a dpe paragraph object, with start, and end attribute eg in seconds
 * @param {*} words a list of word objects with start and end attributes
 * @returns a lsit of words obejcts that are included in the given paragraphs
 */
const getWordsForSentence = (currentSentence) => {
  return currentSentence['words'];
};

export default getWordsForSentence;
