const sentence = 'JEAN-MARCEL-HENRI DE LA FONTAINE';

const arrayUpperCase = sentence.toLowerCase().split(' ').map(String);

function transform() {
  const finishedTransformed = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arrayUpperCase.length; i++) {
    const firstLetterMaj = ((arrayUpperCase[i][0]).toUpperCase());
    const replacement = (arrayUpperCase[i].replace(arrayUpperCase[i][0], firstLetterMaj));
    finishedTransformed.push(replacement);
  }
  console.log(finishedTransformed.join(' '));
}

// transform();

mockObject = {
  sauce: 'Hannibal',
  fries: true,
  kebab: 'Double',
  soda: 'Sprite',
};

const command = { ...mockObject };
console.log(command);
