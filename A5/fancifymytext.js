//alert("hi")
/* const bt1 = document.querySelector("#bt1");

bt1.addEventListener("click", () => {
    alert("Hello, world!");
}); */

//double the size of the text field font when the button is clicked
const buttonfn1 = () => {
    alert("Hello, world!");
    const textbox_ref = document.getElementById("text-field");

    //alert("current size: " + textbox_ref.style.fontSize);
    textbox_ref.style.fontSize = "2em";
}

//add moo to the end of the text when button is clicked
const buttonfn2 = () => {
    const textbox_ref = document.getElementById("text-field");
    //alert(textbox_ref.value)
    var text = textbox_ref.value;
    var sentences = text.split(".");
    var moo = sentences.join("-Moo.");
    textbox_ref.value = moo;
}

//add a style to the text field when the fancy radio button is selected
const radiofn1 = () => {
    const textbox_ref = document.getElementById("text-field");
    textbox_ref.style.fontWeight= "bold";
    textbox_ref.style.color= "blue";
    textbox_ref.style.textDecoration= "underline";

    //textbox_ref.style.fontFamily= "Brush Script MT, cursive";
    //textbox_ref.style.textShadow= "1px 5px 8px red, 2px 2px 1px blue";
    //textbox_ref.style.background= "#F5F5DC"
}

//remove style from text field when boring button is selected
const radiofn2 = () => {
    const textbox_ref = document.getElementById("text-field");
    textbox_ref.style.fontWeight= "normal";
    textbox_ref.style.color= "black";
    textbox_ref.style.textDecoration= "";
    
    //textbox_ref.style.fontFamily= "Times New Roman";
    //textbox_ref.style.textShadow= "";
    //textbox_ref.style.background= "#FFFFFF"
}



