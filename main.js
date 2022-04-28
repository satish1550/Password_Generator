const result1El=document.getElementById("result1");
const result2El=document.getElementById("result2");
const result3El=document.getElementById("result3");
const result4El=document.getElementById("result4");
const lengthEl=document.getElementById("length");
const uppercaseEl=document.getElementById("uppercase");
const lowercaseEl=document.getElementById("lowercase");
const numbersEl=document.getElementById("numbers");
const symbolsEl=document.getElementById("symbols");
const generateEl=document.getElementById("generate");
const clipboard1El=document.getElementById("clipboard1");
const clipboard2El=document.getElementById("clipboard2");
const clipboard3El=document.getElementById("clipboard3");
const clipboard4El=document.getElementById("clipboard4");

const randomFunc={
    lower:getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    symbol:getRandomSymbol
};
clipboard4El.addEventListener("click", function(){
    const textarea=document.createElement("textarea");
    const password=result4El.innerText;
    if(!password){
        return;
    }
    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password is copied to clipboard")
});
clipboard1El.addEventListener("click", function(){
    const textarea=document.createElement("textarea");
    const password=result1El.innerText;
    if(!password){
        return;
    }
    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password is copied to clipboard")
});
clipboard2El.addEventListener("click", function(){
    const textarea=document.createElement("textarea");
    const password=result2El.innerText;
    if(!password){
        return;
    }
    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password is copied to clipboard")
});
clipboard3El.addEventListener("click", function(){
    const textarea=document.createElement("textarea");
    const password=result3El.innerText;
    if(!password){
        return;
    }
    textarea.value=password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    textarea.remove();
    alert("Password is copied to clipboard")
});

generateEl.addEventListener("click", function(){
    const length = +lengthEl.value;
    const hasLower=lowercaseEl.checked;
    const hasUpper=uppercaseEl.checked;
    const hasNumber=numbersEl.checked;
    const hasSymbol=symbolsEl.checked;

    result1El.innerHTML=generatePassword(hasLower, hasUpper, hasNumber, hasSymbol,length);
    result2El.innerHTML=generatePassword(hasLower, hasUpper, hasNumber, hasSymbol,length);
    result3El.innerHTML=generatePassword(hasLower, hasUpper, hasNumber, hasSymbol,length);
    result4El.innerHTML=generatePassword(hasLower, hasUpper, hasNumber, hasSymbol,length);
});
function generatePassword(lower,upper,number,symbol,length){
    let generatedPassword="";
    const typesconnt=lower+upper+number+symbol;
    const typesArr=[{lower},{upper},{number},{symbol}].filter(item=>Object.values(item)[0]);
    if(typesconnt===0){
        return "select at least one Option";
    }
    for(let i=0; i<length; i +=typesconnt){
        typesArr.forEach(type=>{
            const funcName=Object.keys(type)[0];
            generatedPassword +=randomFunc[funcName]();
        });
    }
    const finalPassword=(generatedPassword.slice(0,length));
    return finalPassword;
}

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
    const symbols="!@#$%^&*()_+-{}[]<>,.?/";
    return symbols[Math.floor(Math.random()*symbols.length)];
}