
function consecutiveNumber(num) {
  let number = 0; // This will hold the max consecutive 1s
  let finalAnswer = 0; // This will hold the current streak of 1s

  for (let i = 0; i < num.length; i++) {
    if (num[i] === 1) {
      finalAnswer += 1; // Increment current streak when we find 1
    } else {
      number = Math.max(finalAnswer, number); // Update the max streak
      finalAnswer = 0; // Reset the current streak when we find 0
    }
  }

  // Return the maximum of the last streak and the current maximum
  return Math.max(finalAnswer, number);
}

let dummy = [1, 1, 0, 1,1,1,1,1,0,0,0,0];
console.log(consecutiveNumber(dummy)); // Output will be 2


# find they all number disapred in array
