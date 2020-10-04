var n1 = Math.floor(Math.random() * 10 + 1);
var n2 = Math.floor(Math.random() * 10 + 1);
var ans = n1 + n2;

document.getElementById('num1').value = n1;
document.getElementById('num2').value = n2;

function check() {
    var ua = document.getElementById('answer').value;

    if (ua == ans) {
        alert("Correct ans!");

    }
    else {
        alert(`Correct answer is ${ans} .Incorrect ans! Try again!`);
    }

    n1 = Math.floor(Math.random() * 10 + 1);
    n2 = Math.floor(Math.random() * 10 + 1);
    ans = n1 + n2;

    document.getElementById('num1').value = n1;
    document.getElementById('num2').value = n2;
    document.getElementById('answer').value = "";
}