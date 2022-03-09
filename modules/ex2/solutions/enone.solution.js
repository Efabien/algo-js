module.exports = (input) => {
  let isPalendrom = true;
  input = input.toLowerCase();
  for (let i = 0, j = input.length - 1; i < input.length; i++, j--) {
    const a = input[i];
    const b = input[j];
    isPalendrom = a === b;
    if (!isPalendrom) {
      return isPalendrom;
    }
  }
  return isPalendrom;
};
