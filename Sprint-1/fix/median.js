// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

function calculateMedian(list) {
  if (!Array.isArray(list)) return null; // this checks if "list" is an array if not return's null.
  
// filter the non number values out of an array like "strings", "null's", "undefined"
  const numbers = list.filter(value => typeof value === `number` && !isNaN(value));

// if no numbers are left return null
  if (numbers.length === 0) return null;

// sort numbers into ascending order
  numbers.sort(function(a, b){
    return a - b;
  });

  // find the middle index based on filtered numbers length
  const middleIndex = Math.floor(numbers.length / 2);

  // return correct median based on odd or even count
  if (numbers.length % 2 === 0) {
    // even length average of two middle numbers
    return (numbers[middleIndex - 1] + numbers[middleIndex]) / 2;
  } else {
    // odd length return the middle number
    return numbers[middleIndex];
  }
}

module.exports = calculateMedian;
