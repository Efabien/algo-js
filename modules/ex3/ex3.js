const utils = require('../../utils');

module.exports = (arg, { logger }) => {
  const datas = [
    {
      value: [3, 2, 1, 5],
      expected: [1, 2, 3, 5],
      name: 'Small array'
    },
    {
      value: [],
      expected: [],
      name: 'Empty array'
    }
  ];

  utils.solutionReader(
    { dir: __dirname, logger },
    datas
  )
};