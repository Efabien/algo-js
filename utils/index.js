const fs = require('fs');
const path = require('path');

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
