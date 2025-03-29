const accountId = 52843100;
let accountEmail = "vkumar080@rku.ac.in";
var accountPassword = "12345";
accountCity = "Rajkot";
let accountState;

/*
//why we not use var?
Prepfer not to use var because of issue in block scope and function scope 
// var
for (var i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}
console.log(i); // 5 (i is accessible outside the loop)
=============================================================
// var
if (true) {
  var x = 10;
}
console.log(x); // 10 (x is accessible outside the block)
============================================================
// var
function varExample() {
  var x = 10;
  if (true) {
    var x = 20;
    console.log(x); // 20
  }
  console.log(x); // 20 (x is reassigned)
}
*/

// accountId = 2; // This will cause a TypeError
accountEmail = "vk@rku.ac.in";
accountPassword = "123456";
accountCity = "Ahmedabad";

// Using console.log to display the variables
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

// Using console.log to display the variables in a single line
console.log(accountId, accountEmail, accountPassword, accountCity);

// Using console.log with string interpolation
console.log(
  `Account ID: ${accountId}, Email: ${accountEmail}, Password: ${accountPassword}, City: ${accountCity}`
);

// Using console.warn to display a warning message
console.warn("This is a warning message!");

// Using console.info to display an informational message
console.info("This is an informational message!");

// Using console.debug to display a debug message
console.debug("This is a debug message!");

// Using console.assert to display an assertion message
console.assert(accountId === 52843100, "Account ID does not match!");

// Using console.group to group related messages
console.group("Account Details");
console.log(`Account ID: ${accountId}`);
console.log(`Email: ${accountEmail}`);
console.log(`Password: ${accountPassword}`);
console.log(`City: ${accountCity}`);
console.groupEnd();

// Using console.error to display an error message
console.error("An error occurred!");

// Using console.table to display the variables in a table format
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
