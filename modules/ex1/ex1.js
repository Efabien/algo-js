const solution = require('./solutions/enone.solution.js');

const { assert, expect } = require('chai');

module.exports = async(arg, { logger, spinnerFactory, dependencies }) => {
  const data = [1, 2, 3];
  try {
    expect(solution({ data })).to.equal(data.length)
    logger.info('Run succefully');
  } catch (error) {
    logger.error(error.message)
  }
};