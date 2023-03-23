let key = document.body.addEventListener('keydown', keyInfo);
let primaryClass = document.querySelector('#primaryInfo')
let asciiCode = document.querySelector('.asciiCode')
let keyMain = document.querySelector('.keyMain');
let locationMain = document.querySelector('.locationMain');
let codeMain = document.querySelector('.codeMain');
let whichMain = document.querySelector('.whichMain');
let descriptionMain = document.querySelector('.descriptionMain');
let infoBox = document.querySelector('.info');
let additionalInfoBox = document.querySelector('.additionalInfo');
infoBox.style.display = 'none';
let recent1 = "", recent2 = " ", recent3 = "", recent4 = "";
additionalInfoBox.style.display = 'none';
asciiCode.style.display = 'none'
let r1 = document.querySelector('.r1');
let r2 = document.querySelector('.r2');
let r3 = document.querySelector('.r3');
let r4 = document.querySelector('.r4');
let metaKeysMain = document.querySelector('.metaKeysMain');
let eventDumpMain = document.querySelector('.eventDumpMain');
let similarValuesMain = document.querySelector('.similarValuesMain');
let unicodeMain = document.querySelector('.unicodeMain');
let historyMain = document.querySelector('.historyMain');
function keyInfo() {
    event.preventDefault();
    recent4 = recent3;
    recent3 = recent2;
    recent2 = recent1;
    recent1 = event.key;
    primaryClass.style.display = 'none';
    asciiCode.style.display = 'block'
    asciiCode.innerHTML = event.keyCode;
    keyMain.innerHTML = event.key;
    if (event.location == 0) {
        locationMain.innerHTML = "General keys <sub> (0) </sub>"
    }
    else if (event.location == 1) {
        locationMain.innerHTML = "Left-side modifier keys <sub> (1) </sub>"
    }
    else if (event.location == 2) {
        locationMain.innerHTML = "Right-side modifier keys <sub> (2) </sub>"
    }
    else if (event.location == 3) {
        locationMain.innerHTML = "Numpad <sub> (3) </sub>"
    }
    codeMain.innerHTML = event.code;
    whichMain.innerHTML = event.which;
    descriptionMain.innerHTML = event.code;
    infoBox.style.display = 'block';
    eventDumpMain.innerHTML = `{<br/>
        \"key\": \" ${event.key} \", <br/>
        \"keyCode\": ${event.keyCode}, <br/>
        \"which\": ${event.which},<br/>
        \"code\": \"${event.code}\",<br/>
        \"location\": ${event.location},<br/>
        \"altKey\": ${event.altKey},<br/>
        \"ctrlKey\": ${event.ctrlKey},<br/>
        \"metaKey\": ${event.metaKey},<br/>
        \"shiftKey\": ${event.shiftKey},<br/>
        \"repeat\": ${event.repeat} <br/>
       }`
    r1.innerHTML = recent1;
    r2.innerHTML = recent2;
    r3.innerHTML = recent3;
    r4.innerHTML = recent4;
    additionalInfoBox.style.display = 'block';

    console.log(event);
}