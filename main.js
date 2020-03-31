/******************
 * YOUR CODE HERE *
 ******************/

 const firstNumberIsLess = function (num1, num2){
 return num1 - num2
  
}

const secondNumberIsLess = function (num1, num2){
  return num2 - num1

}

const firstNameIsFirstAlphabetically = function(name1, name2){
  if (name1 > name2) {
    return 1;
  } else if (name1 < name2) {
    return -1;
  } else {
    return 0;
  }
};

const firstLastNameIsFirstAlphabetically = function(fName1, fName2){
  
  let lName1 = fName1.slice(fName1.indexOf(' ') + 1);
  let lName2 = fName2.slice(fName2.indexOf(' ') + 1);
  
  if (lName1 > lName2) {
    return 1;
  } else if (lName1 < lName2) {
    return -1;
  } else {
    return 0;
  }
};

/************************
// ITERATION FUNCTIONS
 ************************/
const trueIsFirst = function (bool1, bool2){
  if (bool1 === true && bool2 === false) {
    return -1;
  } else if (bool1 === false && bool2 === true){

    return 1;
  } else {
    return 0;
  }
} 

const sortByNumberAscending = function(num){
 let numsAscend = num.slice();

    return numsAscend.sort(firstNumberIsLess);
  }

  const sortByNumberDescending = function(num){
    let numsDescend = num.slice();

    return numsDescend.sort(secondNumberIsLess)
    }
    
const truesFirst = function(arr){
let theTruth = arr.slice();

return theTruth.sort(trueIsFirst)
}

const sortByNameAscending = function(fName){
  let namesAscend = fName.slice();

  return namesAscend.sort(firstNameIsFirstAlphabetically)

}

const sortByLastNameAscending = function(lName){
  let lNameAscend = lName.slice();

  return lNameAscend.sort(firstLastNameIsFirstAlphabetically)
}

/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/

if (typeof firstNumberIsLess === 'undefined') {
  firstNumberIsLess = undefined;
}

if (typeof secondNumberIsLess === 'undefined') {
  secondNumberIsLess = undefined;
}

if (typeof firstNameIsFirstAlphabetically === 'undefined') {
  firstNameIsFirstAlphabetically = undefined;
}

if (typeof firstLastNameIsFirstAlphabetically === 'undefined') {
  firstLastNameIsFirstAlphabetically = undefined;
}

if (typeof sortByNumberAscending === 'undefined') {
  sortByNumberAscending = undefined;
}

if (typeof sortByNumberDescending === 'undefined') {
  sortByNumberDescending = undefined;
}

if (typeof sortByNameAscending === 'undefined') {
  sortByNameAscending = undefined;
}

if (typeof sortByLastNameAscending === 'undefined') {
  sortByLastNameAscending = undefined;
}

if (typeof trueIsFirst === 'undefined') {
  trueIsFirst = undefined;
}

if (typeof truesFirst === 'undefined') {
  truesFirst = undefined;
}


module.exports = {
  firstNumberIsLess,
  secondNumberIsLess,
  firstNameIsFirstAlphabetically,
  firstLastNameIsFirstAlphabetically,
  trueIsFirst,
  truesFirst,
  sortByNumberAscending,
  sortByNumberDescending,
  sortByNameAscending,
  sortByLastNameAscending,
  truesFirst,
}
