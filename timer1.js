// 1. command line arguments
// 2. loop thru the input arguments - for.. of
// 3. set the input arguments to Number
// 4. check if no numbers are provided - no beep
// 5. check if any of inputs are negative numbers - ignore/skip
// 6. check if any of inputs are numbers - ignore/skip

const args = process.argv.slice(2);

for (const input of args) {
  const inputNumber = Number(input);
  if (typeof inputNumber === 'number' && inputNumber >= 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, inputNumber * 1000);
  }
}
