export const capitalizeFirstLetter = (word) => {
  if (word) {
    if (/^[A-z]/g.test(String(word))) {
      word = word[0].toUpperCase() + "" + word.substring(1);
    }
    return word;
  }
  return "";
};
