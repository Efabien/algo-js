module.exports = (input) => {
  const { data } = input;
  return data.sort((a, b) => {
    return a - b
  });
};
