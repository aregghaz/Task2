/**
 * Created by Ashot on 6/4/2016.
 */
function FuncGum() {
    var number1 = document.getElementById("number1").value;
    var number2 = document.getElementById("number2").value;
    var select = document.getElementById("select").options.selectedIndex;
    var answer = document.getElementById("answer");
    if (select == 0) {

        answer.innerHTML = parseInt(number1) + parseInt(number2);

    }
    if (select == 1) {
        answer.innerHTML = parseInt(number1) - parseInt(number2);
    }
    if (select == 2) {
        answer.innerHTML = parseInt(number1) / parseInt(number2);
    }
    if  (select == 3 ) {
        answer.innerHTML = parseInt(number1) * parseInt(number2);
    }
}
