function getRandomInRange(min, max) {
  return Math.floor(Math.random() * max) - min;
}

function generateAlphanumericStrings(stringLength, numStrings) {
  const chars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let strings = [];
  while (numStrings > 0) {
    let string = "";
    let len = stringLength;
    while (len > 0) {
      string += chars[getRandomInRange(0, chars.length)];
      len -= 1;
    }
    strings.push(string);
    numStrings -= 1;
  }

  return strings;
}

export { generateAlphanumericStrings };
