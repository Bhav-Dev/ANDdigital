/**
* The following is the function where the solution shall be written
*/

function solution (input) {
  // define results
  var results = [];

  // extracting only numbers
  input = input.replace(/[^0-9]/g,'');

  // check if string is a single character
  if (input.length === 1) {
    // add the character to the results
    results.push(input);
    // return results
    return results;
  }

  // for each char in string
  for (var i = 0; i < input.length; i++) {
    // define innerPermutations are a char of string
    var firstChar = input[i];
    // set inner permutations to get all Permutations (without next char)
    var charsLeft = input.substring(0, i) + input.substring(i + 1);
    var innerPermutations = solution(charsLeft);
    // foreach string in innerPermutations
    for (var j = 0; j < innerPermutations.length; j++) {
      // add defined char and innerPermutations char
      results.push(firstChar + innerPermutations[j]);
    }
  }
  // return results
  return results.sort(function(a, b) {return b-a});
}
// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236