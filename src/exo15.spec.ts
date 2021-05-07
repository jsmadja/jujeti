// eslint-disable-next-line import/no-extraneous-dependencies
const capitalize = require('lodash.capitalize');

const capitalizeCharWord = (word: string, char: string) => word.split(char).map((w) => capitalize(w)).join(char);

const tranformTextCapitalizeJerome = (fullName: string) => fullName.split(' ')
  .map((word) => capitalizeCharWord(capitalize(word), '-'))
  .join(' ');
/*
const tranformTextCapitalizeTim = (fullName: string) => fullName.split(' ')
  .map((word) => capitalize(word))
  .map((word) => capitalizeCharWord(word))
  .join(' ');
*/

/* const tranformTextCapitalizeJulien = (fullName: string) => fullName.split(' ')
  .map(capitalize)
  .map(capitalizeCharWord)
  .join(' ');
*/

test('Mettre une majuscule au début de chaque nom"', () => {
  expect(tranformTextCapitalizeJerome('MICHEL')).toBe('Michel');
  expect(tranformTextCapitalizeJerome('MICHEL MOLIERE')).toBe('Michel Moliere');
  expect(tranformTextCapitalizeJerome('MICHEL-MOLIERE')).toBe('Michel-Moliere');
  expect(tranformTextCapitalizeJerome('JEROME-LOUIS-RICHARD CNOCKAERT DE LA MER'))
    .toBe('Jerome-Louis-Richard Cnockaert De La Mer');
  expect(tranformTextCapitalizeJerome('JACQUES-EDOUARD PAPA')).toBe('Jacques-Edouard Papa');
  expect(tranformTextCapitalizeJerome('micheline-pascaline de robespierre'))
    .toBe('Micheline-Pascaline De Robespierre');
  expect(tranformTextCapitalizeJerome('JACKY-TUNING'));
});
