const solution = require('./solutions/enone.solution.js');

const { assert, expect } = require('chai');

module.exports = (arg, { logger }) => {
  const data = [3, 2, 1];
  try {
    expect(solution({ data })).to.eql([1, 2, 3])
    logger.info('Run succefully');
  } catch (error) {
    logger.error(error.message)
  }
};