// PASSWORD GENERATOR PROGRAM (enhanced)

const result = document.getElementById("result");
const textGen = document.getElementById("textGen");

function getData() {
    const length = document.getElementById("length").value;
    const includeSym = document.getElementById("symbols").checked ? true : false;
    const includeNum = document.getElementById("numbers").checked ? true : false;
    const includeUpper = document.getElementById("upperCase").checked ? true : false;
    const includeLower = document.getElementById("lowerCase").checked ? true : false;

    if (length <= 0){

        result.textContent = "You must select a value above 0";

    } else if (includeSym == false && includeNum == false && includeUpper == false && includeLower == false){
        result.textContent = "a checkbox must be selected!"
        
    } else {
        return passwordGen(length, includeSym, includeNum, includeUpper, includeLower);
    }
}


function passwordGen(length, includeSym, includeNum, includeUpper, includeLower){

    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const symbolChars = "!£$%^&*()?@~:";
    const numberChars = "0123456789";

    let allowedChars = "";
    let password = "";

    allowedChars += includeSym ? symbolChars : "";
    allowedChars += includeNum ? numberChars : "";
    allowedChars += includeUpper ? upperCaseChars : "";
    allowedChars += includeLower ? lowerCaseChars : "";
    
    for(let i = 0; i < length; i++){

        const indexRef = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[indexRef];

    }

    textGen.textContent = `Password:`;
    result.textContent = `${password}`;
}
