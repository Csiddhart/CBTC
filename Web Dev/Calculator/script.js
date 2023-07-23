let string = ""; //here empty string is defined because initially we don't need any output
let buttons = document.querySelectorAll(".button"); //we are calling the buttons

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    //onclicking the button we will get the desired output[here we can directly use 'onclick' function and then define a function, but prb statement given to us needs to eventlistener,if-else,loops,etc]
    if (e.target.innerHTML == "=") {
      string = eval(string); //here evaluation or execution of an argument is done by eval.
      document.querySelector("input").value = string; //we are calling the input box
    } else if (e.target.innerHTML == "AC") {
      //if AC button is clicked, it will remove previous calculation
      string = "";
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML; //here output calculation is performed and displayed
      document.querySelector("input").value = string;
    }
  });
});
