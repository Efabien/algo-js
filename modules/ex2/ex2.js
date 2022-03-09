const utils = require('../../utils');

module.exports = (arg, { logger }) => {
  const datas = [
    {
      value: 'iTopiNonAvevanoNipoti',
      expected: true,
      name: 'Case - 0'
    },
    {
      value: 'iGattiNonAvevanoCugini',
      expected: false,
      name: 'Case - 2'
    }
  ];

  utils.solutionReader(
    { dir: __dirname, logger },
    datas
  )
};