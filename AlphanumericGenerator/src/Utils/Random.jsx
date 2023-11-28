function getRandomInRange(min, max) {
  return Math.floor(Math.random() * max) - min;
}

function generateAlphanumericStrings({
  stringLength,
  numStrings,
  uppercaseCheck,
  uniqueCharactersCheck,
  uniqueStringsCheck,
}) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const charsLower = [
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
  const charsUpper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const charPool = uppercaseCheck
    ? digits.concat(charsUpper)
    : digits.concat(charsLower);

  let strings = [];
  while (numStrings > 0) {
    let string = "";
    let len = stringLength;
    while (len > 0) {
      let char = charPool[getRandomInRange(0, charPool.length)];
      // check if unique strings is required
      if (uniqueCharactersCheck && string.indexOf(char) > -1) {
        continue;
      }
      string += char;
      len -= 1;
    }

    // check if unique strings is required
    if (
      uniqueStringsCheck &&
      strings.filter((elem) => elem === string).length > 0
    ) {
      continue;
    }

    strings.push(string);
    numStrings -= 1;
  }

  return strings;
}

export { generateAlphanumericStrings };
