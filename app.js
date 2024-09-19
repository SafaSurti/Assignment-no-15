                    //  ASSIGNMENT NO 15
                //   USER INPUT AND CONDITIONAL STATEMENT
                         // QUESTION NO 1

// var city = prompt("city")
// if(city === "karachi"){
// alert("Welcome to karachi")
// }
 
                         // QUESTION NO 2
                         
//  var gender = prompt("gender")
//  if(gender === "Male"){
//     alert("Good Morning Sir.")

//  } 
//  if(gender === "Female"){
// alert("Good Morning Maam.")
//  }
               
                         // QUESTION NO 3
  
// var Signal = prompt("Enter the traffic signal color (Red, Yellow, Green):")

//     if(Signal === "Red") {
        
//             document.write("Must stop");
//     }
//     if(Signal === "Yellow"){
            
//             document.write("Ready to move");
//      } 
//      if(Signal === "Green"){
//             document.write("Move now");
//             br;
//      }

                         // QUESTION NO 4

//  var fuel = prompt("fuel?")
//  if(fuel < 0.25) {
//     alert("“Please refill the fuel in your car”")
//  }

                         // QUESTION NO 5 (a)


    //  var a = 4;
    //   if (++a === 5){
    //  alert("given condition for variable a is true");
    //  }
    // in this condition message was displayed

                         // QUESTION NO 5 (b)


    //  var b = 82;
    //  if (b++ === 83){
    //  alert("given condition for variable b is true");
    //  }
    // in this condition message was not displayed

                         // QUESTION NO 5 (c)

//     var c = 12;
//    if (c++ === 13){
//    alert("condition 1 is true");
//     }
    // in this condition message was not displayed
    // if (c === 13){
    //     alert("condition 2 is true");
    //     }
    // in this condition message was displayed
        // if (++c < 14){
        // alert("condition 3 is true");
        // }
    // in this condition message was not displayed

        // if(c === 14){
        // alert("condition 4 is true");
        // }
    // in this condition message was displayed

                         // QUESTION NO 5 (d)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
    // in this condition message was displayed

                         // QUESTION NO 5 (e)

    //  if (true){
    //      alert("True");
    //  }
    // in this condition message was displayed

    //  if (false){
    // alert("False");
    //  }    
    // in this condition message was not displayed
    //  if("car" < "cat"){
    //     alert("car is smaller than cat");
    //     }
    // in this condition message was displayed

                         // QUESTION NO 6


// document.write("<h1>Marks Sheet</h1>");
// var totalMarks = 300;
// document.write("<h2>Total Marks: = 300</h2>")
// var obtainedMarks = 219;
// document.write("<h2>Obtained Marks: = 219</h2> <h2> Percentage:</h2>")
// var per = ( obtainedMarks / totalMarks * 100 )
// document.write( per)
// document.write("<h2>Grade</h2> <br>" )
// if( per >= 80){
//     document.write("A-one")

// }
// if( per === 73){
//     document.write("B")

// }
// document.write("<h2>Remarks</h2> <br>" )
// if( per >= 80){
//     document.write("A-one")
// }
// if( per === 73){
//     document.write("You need to improve")
// }

                         // QUESTION NO 7

                         // Store a secret number between 1 and 10
// var userGuess = prompt("Guess a number between 1 and 10:");
// if ( userGuess === "1") {
//     alert("Bingo! Correct answer.")
// }
// if ( userGuess === "+1") {
//     alert("Close enough to the correct answer.")
// }

                         // QUESTION NO 8

//  var number = parseInt(prompt("Enter a number"));
//  if ( number % 3 === 0){
//     alert("The number is divisible by 3")
//  } else {  
//     alert("The number is not divisible by 3")
//  }

                         // QUESTION NO 9

// var number = parseInt(prompt("Enter a number:"));
// if (number % 2 === 0) {
//     alert("The number is even.");
// } else {
//     alert("The number is odd.");
// }                         

                         // QUESTION NO 10

// var temp = prompt("Temperature")                         
// if(temp > 40){
//     alert("It is too hot outside.")
// }
// if(temp > 30){
//     alert("The Weather today is Normal.")
// }
// if(temp > 20){
//     alert("Today's Weather is cool.")
// }
// if(temp > 10){
//     alert("OMG! Today’s weather is so Cool.”")
// }

                         // QUESTION NO 11


// var firstNumber = parseFloat(prompt("Enter the first number:"));
// var secondNumber = parseFloat(prompt("Enter the second number:"));
// var operation = prompt("Enter the operation (+, -, *, /, %):");
// if (operation === "+") {
//     result = firstNumber + secondNumber;
// } else if (operation === "-") {
//     result = firstNumber - secondNumber;
// } else if (operation === "*") {
//     result = firstNumber * secondNumber;
// } else if (operation === "/") {
//     if (secondNumber !== 0) {
//         result = firstNumber / secondNumber;
//     } else {
//         alert("Error: Division by zero is not allowed.");
//     }
// } else if (operation === "%") {
//     if (secondNumber !== 0) {
//         result = firstNumber % secondNumber;
//     } else {
//         alert("Error: Division by zero is not allowed.");
//     }
// } else {
//     alert("Invalid operation. Please enter one of the following: +, -, *, /, %.");
// }
// if (result !== undefined) {
//     alert("The result is: " + result);
// }                         



//    IF...ELSE & ELSE IF STATEMENT,TESTING SET OF CONDITIONS
                         // QUESTION NO 1


// var input = prompt("Enter a single character:");

// // Get the ASCII code of the input character
// var check = input.charCodeAt(0);

// // Check if the input is a number, uppercase letter, or lowercase letter
// if (check >= 48 && check <= 57) {
//     alert("The input is a number.");
// } else if ( check>= 65 &&  check <= 90) {
//     alert("The input is an uppercase letter.");
// } else if ( check >= 97 &&  check <= 122) {
//     alert("The input is a lowercase letter.");
// } else {
//     alert("The input is neither a number nor a letter.");
// }                         

                         // QUESTION NO 2

 // Function to compare two integers
//  var number1 = parseInt(prompt("Enter the first number:"));
// var number2 = parseInt(prompt("Enter the second number:"));

// compareIntegers(number1, number2);         
// function compareIntegers(num1, num2) {
//     if (num1 > num2) {
//         console.log("The larger number is: " + num1);
//     } else if (num2 > num1) {
//         console.log("The larger number is: " + num2);
//     } else {
//         console.log("Both numbers are equal.");
//     }
// }

                         // QUESTION NO 3

// let number = prompt("Enter a number:");

// number = parseFloat(number);

// // Check if the number is positive, negative, or zero
// if (isNaN(number)) {
//   console.log("Please enter a valid number.");
// } else if (number > 0) {
//   console.log("The number is positive.");
// } else if (number < 0) {
//   console.log("The number is negative.");
// } else {
//   console.log("The number is zero.");
// }                         

                         // QUESTION NO 4
//    let char = prompt("Enter a single character:"); // Take input from user
//    console.log(isVowel(char)); // Output the result                         
                       
// // Function to check if a character is a vowel
// function isVowel(char) {
//     // Check if the input is a single character
//     if (char.length !== 1) {
//       return false;
//     }
  
//     // Convert the character to lowercase for comparison
//     char = char.toLowerCase();
  
//     // Define a string containing all vowels
//     var vowels = 'aeiou';
  
//     // Check if the character is in the vowels string
//     return vowels.includes(char);
//   }

                         // QUESTION NO 5

  
 // a. Store the correct password in a variable
// var correctPassword = "Abc123";

// let userPassword = prompt("Please enter your password:");


// if (userPassword === null || userPassword.trim() === "") {
 
//   console.log("Please enter your password");
// } else if (userPassword === correctPassword) {
 
//   console.log("Correct! The password you entered matches the original password.");
// } else {
//   console.log("Incorrect password.");
// }

                         // QUESTION NO 6
                  
            //          var greeting ; prompt("Enter the hours")
            //          var hour = 13;
            //          if (hour < "18"){
            // alert("Good day")       
            //          } else{
            //             alert ("Good evening")
            //          }

                         // QUESTION NO 7

// var inputTime = prompt("Enter the time in 24-hour format (e.g., 1900 for 7 PM):");

// // Convert the input to an integer
// var hour = parseInt(inputTime.substring(0, 2));

// // Initialize greeting variable
// var greeting;

// if (hour >= 0 && hour < 6) {
//     greeting = "Good night";
// } else if (hour >= 6 && hour < 12) {
//     greeting = "Good morning";
// } else if (hour >= 12 && hour < 18) {
//     greeting = "Good afternoon";
// } else if (hour >= 18 && hour < 24) {
//     greeting = "Good evening";
// } else {
//     greeting = "Invalid time";
// }

// // Display the greeting
// console.log(greeting);                         
               
                      // Chapter 10 (if statements)
                         // QUESTION NO 1

// var city = "Karachi";
// if(city === "Karachi"){
//     console.log("The City Of Lights")
// }

                         // QUESTION NO 2
//  This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.                        

                         // QUESTION NO 3

//      var zipCode = prompt()
//  if(zipCode === "10010"){
//     alert("Karachi");
//  }  else {
//     alert("Please write the correct city")
//  }                      

                         // QUESTION NO 4
