import generatePreviousTimingsUpToCurrent from './generate-previous-timings-up-to-current';
import { shortTimecode } from '../timecode-converter';
import getWordsForSentence from '../get-words-for-sentence';

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const convertSbsToSlate = (transcript) => {
  if (isEmpty(transcript)) {
    return [
      {
        speaker: 'U_UKN',
        start: 0,
        previousTimings: '0',
        startTimecode: '00:00:00',
        type: 'timedText',
        children: [
          {
            text: 'Text',
            // Adding list of words in slateJs paragraphs
            words: [],
          },
        ],
      },
    ];
  }

  const sentences = transcript['transcription'];

  return sentences.map((sentence) => ({
    speaker: sentence.speakerLabel,
    start: sentence.startTime,
    previousTimings: generatePreviousTimingsUpToCurrent(sentence.startTime),
    // pre-computing the display of the formatting here so that it doesn't need to convert it in leaf render
    startTimecode: shortTimecode(sentence.startTime),
    type: 'timedText',
    children: [
      {
        text: sentence.text,
        // Adding list of words in slateJs paragraphs
        words: getWordsForSentence(sentence),
      },
    ],
  }));
};

export default convertSbsToSlate;
