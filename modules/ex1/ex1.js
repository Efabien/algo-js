const solution = require('./solutions/enone.solution.js');
const utils = require('../../utils');

const { assert, expect } = require('chai');

module.exports = (arg, { logger }) => {
  const solutions = utils.loadSoltions(__dirname);
  const data = [3, 2, 1, 5];
  for (let i = 0; i < solutions.length; i++) {
    try {
      const { solution, name } = solutions[i]
      logger.data(`Testing ${name} ...`)
      assert(
        solution({ data: data.map(item => item) }).every((item, index, array) => {
          if (index === 0) return true;
          return item > array[index - 1]
        }),
        '! Array should be sorted'
      )
      logger.info(`${'✔'} Run succefully`)
    } catch (error) {
      logger.error(error.message)
    }
  }
};