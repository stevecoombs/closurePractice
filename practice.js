//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

var inner = outer();

//Once you do that, invoke inner.

  //Code Here

inner();

//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

var callF = callFriend();
callF('435-215-9248');

//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here

var makeCounter = function() {
  var num = 0;
  return function () {
    num += 1;
    return num;
  };
};

  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//Next Problem

var callOnce = function(cb, n) {
  var num = 0;
  return function() {
    num += 1;
    if (n <= 2) {
      return cb();
    }
    else{
      alert('STAHHP');
    }
  }
}


var limitedFunc = callONce(functon(){alert('hi')}, 2);
limitedFunc(); //'hi'
limitedFunc(); //'hi'
limitedFunc(); //'STAHHP'
limitedFunc(); //'STAHHP'

-------------------------------

var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if ( username == "Formget" && password == "formget#123"){
    alert ("Login successfully");
    window.location = "success.html"; // Redirecting to other page.
    return false;
  }
  else{
    attempt --;// Decrementing by one.
    alert("You have left "+attempt+" attempt;");
      // Disabling fields after 3 attempts.
  if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
  }
  }
}


/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second arguments that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/




