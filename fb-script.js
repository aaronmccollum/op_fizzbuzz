/*When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number*/

let input = parseInt(prompt("Please enter a number"));

for (let i = 1; i <= input; i++) {
    if (i % 3 === 0 && input % 5 == 0) {
        console.log("Fizz")
    } elseif (i % 3 === 0) {
        console.log("Buzz")
    } elseif (input % 5 == 0) {
        console.log("FizzBuzz")
    } else {
        console.log(i);
    }
}