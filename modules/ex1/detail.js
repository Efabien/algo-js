module.exports = (arg, { logger }) => {
  logger.info(`
    Your function takes one object argument. Let call it input.
    The object has a field input.data witch is an array of number.
    Your function should return a sorted array from input.data .
  `)
};