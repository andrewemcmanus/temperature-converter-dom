//console.log('Hello, front end');
var temp = document.querySelector('#tempf');
function ctof(temp) {
    var ctemp = (temp - 32) * 5/9;  
    return ctemp;
} 
var text = ctof(temp);
console.log(text);
document.querySelector('#celsius').textContent = text;



