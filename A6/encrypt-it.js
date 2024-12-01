/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");

    //encrypt it button
    const encryptBtn = document.getElementById("encrypt-it");
    encryptBtn.addEventListener("click", handleClick1);

    //reset button
    const resetBtn = document.getElementById("reset");
    resetBtn.addEventListener("click", handleClick2);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).

  //encrypt it button
  const handleClick1 = () => {
    console.log("Encrypt it button clicked!");
    const text = document.getElementById("input-text");
    const result = document.getElementById("result");
    
    //encode
    var chars = text.value.split("");
    var encoded = "";
    var sent = "";
    //console.log('!'.toUpperCase().charCodeAt(0));
    var ascii = -1;
    for(let i = 0; i < chars.length; i++) {
      //check if char is a letter or not
      if(chars[i].toLowerCase().charCodeAt(0) >= 97 && chars[i].toLowerCase().charCodeAt(0) <= 122) {
        //char is a letter
        //shift ascii code to where a is 0
        ascii = chars[i].toLowerCase().charCodeAt(0) - 97;
        //add 2
        ascii += 2;
        //mod it to shift values above 
        ascii = ascii % 26;
        //shift values back
        ascii += 97;

        //check if it should be upper or not
        if(chars[i] === chars[i].toUpperCase()) {
          //is upper
          encoded = encoded + String.fromCharCode(ascii).toUpperCase();
        }
        else {
          //is lower
          encoded = encoded + String.fromCharCode(ascii);
        }
      }
      else {
        //char is not a letter just put it back in
        encoded = encoded + chars[i];
      }
      
    }

    /* for(let i = 0; i < chars.length; i++) {
      sent = sent + chars[i].toLowerCase().charCodeAt(0) + " ";
    }
    console.log(sent); */
    //output
    result.textContent = encoded;
  }

  //reset button
  const handleClick2 = () => {
    console.log("Reset button clicked!");
    const text = document.getElementById("input-text");
    const result = document.getElementById("result");
    text.value = "";
    result.textContent="";  
  }

})();
