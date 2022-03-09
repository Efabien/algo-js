const fs = require('fs');
const path = require('path');
const { assert, expect } = require('chai');

module.exports.getSolutionFilePaths = (dir) => {
  const folder = path.join(dir, './solutions');
  return fs.readdirSync(folder, { withFileTypes: true })
    .filter(content => {
      return content.name.substr(-11) === 'solution.js'
    })
    .map(content => {
      return {
        pathTo: path.join(dir, `./solutions/${content.name}`),
        name: content.name
      }
    });
};

module.exports.loadSoltions = (dir) => {
  const paths = this.getSolutionFilePaths(dir);
  return paths.map(({ name, pathTo }) => {
    return {
      name,
      solution: require(pathTo)
    };
  });
};

module.exports.solutionReader = ({ dir, logger }, datas) => {
  const solutions = this.loadSoltions(dir);
  for (let i = 0; i < solutions.length; i++) {
    try {
      const { solution, name } = solutions[i];
      logger.data(`Testing ${name} ...`);
      for (let j = 0; j < datas.length; j++) {
        const { value, expected } = datas[j];
        expect(solution(value)).to.eql(expected);
        logger.info(`${'✔'} Run succefully`);
      }
    } catch (error) {
      logger.error(error.message);
    }
  }
}
