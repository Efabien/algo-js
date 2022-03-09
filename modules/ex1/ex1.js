const utils = require('../../utils');

module.exports = (arg, { logger }) => {
  const datas = [
    {
      value: [3, 2, 1, 5],
      expected: [1, 2, 3, 5]
    }
  ]

  utils.solutionReader(
    { dir: __dirname, logger },
    datas
  )
};