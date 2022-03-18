# Algo-js

This projet aims at helping beginers and advanced js developer to deal with algorythms and data structures.

## Prerequist

You should have node.js and npm installed on your machine to run this project.

## Installation

First clone this repository on your computer :

``` bash
git clone git@github.com:Efabien/algo-js.git
```

Then go to the root of the project and install it globaly :

``` bash
npm install -g
```
From now you can invoke the commande algo.  

## Usage
For a globale understanding of the tool you can type :
``` bash
algo --help
```
You should be prompted something similar to this :
```bash
Commands:
  algo ex1 [sub-cmd]  Sorting an array
  algo ex2 [sub-cmd]  Palendrom
Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
```
Under "Commands:" you can see the list of available challanges, "ex1" and "ex2" being the name of each challenge.  
Under "Options:" you can see the available options.

## How to propose a solution for one challenge
Let suppose that you want to propose a solution for the challange named "ex1".  
Then, from the root of the project, you should go to "./modules/ex1/solutions" and create there the file containing your solution.  
As a convention your solution should be named "<your_name>.solution.js".  
The ".solution.js" naming is required for the file to be considered.

### The content of a solution.js file
- The file sould export a function. 
- The function takes one parameter, which type and structure depends on each challenge.
- The function should return the expected solution to the challenge

Here is what a solution file could look like:

```js
module.exports = (input) => {
  //your computation starts here
  const { foo, bar } = input;
  return foo.every(item => item < bar);
}
```

### Understanding a given challenge
To get the detail of a given challenge, you can type:
```bash
algo ex1 detail
```
### Running the solutions
To run the given solutions to a particular challenge, type:
```bash
algo ex1 solve
```

## How to create a challenge
Further explanations will be added soon about the way to add new challenges.
From now, just refer to the existing ones!. You can see them under "./modules"

## Contributions

You can propose you solutions or proposes new challenge by creating a merge request!  
Your changes will be appreciated.