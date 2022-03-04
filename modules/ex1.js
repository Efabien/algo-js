module.exports = async(arg, { logger, spinnerFactory, dependencies }) => {
  const spinner = spinnerFactory.create('Loading data ...');
  console.log('hello world')
  spinner.succeed();
};