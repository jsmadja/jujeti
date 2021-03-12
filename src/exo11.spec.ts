function getMiddle(s: string) {
  const middle = Math.round(s.length / 2);
  s.split('');
  if (s.length % 2 !== 0) {
    return s[middle - 1];
  }
  return s.slice(middle - 1, middle + 1);
}

test(`Vous allez recevoir un mot. Votre travail consiste à renvoyer le caractère
 central du mot. Si la longueur du mot est impaire, renvoie le caractère du milieu. Si 
 la longueur du mot est paire, renvoyez les 2 caractères du milieu.`, () => {
  expect(getMiddle('vache')).toBe('c');
  expect(getMiddle('chat')).toBe('ha');
});

// refaire subStr();
