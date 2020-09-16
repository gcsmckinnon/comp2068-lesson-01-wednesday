// Debugging and Troubleshooting
try {
  console.log("Hey i still output");
  let age = 41;
  // debugger;
  age = 35;

  if (age > 25) {
    throw new Error('Todd you are so old.');
  }
  console.log("I'm still here");
} catch (error) {
  console.log(error.message);
  console.log("Todd you idiot!");
} finally {
  console.log("Todd you're still an idiot");
}