/**
 * @fileoverview
 * A custom console log.
 */


/** @return {string} */
function randomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}


/** @return {string} */
export function style() {
  const color = `color: #202124;`;
  const fontWeight = `font-weight: bold; font-size: 1em;`;
  const margin = `margin: 5vh 0;`;
  const padding = `padding: 20px;`;
  const backgroundColor = `background-color: #f2f3f4;`;

  return `${color}${fontWeight}${margin}${padding}${backgroundColor}`;
}


/**
 * Emojis that work well with my "mark" 💁‍.
 * @type {Array<string>}
 */
export const fittingEmojis = [
  '🎩✨🐰',
  '🚽💻',
  '🔧🔩',
  '🎸🥁',
  '🔊',
  '🎨',
  '🔮',
  '🔥',
  '🥃',
];


/**
 * Send a random console log.
 */
function mark() {
  const emoji = randomFromArray(fittingEmojis);

  console.log(`%cMade with 🖤 & ${emoji} by Pim de Wit < https://pdw.io >`, style());
}


export default mark;
