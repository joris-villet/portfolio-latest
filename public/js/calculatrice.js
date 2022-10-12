let screen = document.querySelector('.screen');
screen.value = "0";
let operande = '';
let total = 0;

console.time("lecture")
function calculer(gr, number) {
    console.log(gr, number)
    switch(gr) {
        case "ch":
            if (screen.value === "0" || screen.value === "+" || screen.value === "-" || screen.value === "x" || screen.value === "/") {
                screen.value = "";
            }
            screen.value += number;
            break;
        case "op":
            total = parseFloat(screen.value, 10)
            if (number === "+") operande = '+';
            if (number === "-") operande = '-';
            if (number === "x") operande = 'x';
            if (number === "/") operande = '/';
            screen.value = "";
            screen.value += number;
            break;
        case "equal":
            if (operande === '+') total += parseFloat(screen.value, 10)
            if (operande === '-') total -= parseFloat(screen.value, 10)
            if (operande === 'x') total *= parseFloat(screen.value, 10)
            if (operande === '/') total /= parseFloat(screen.value, 10)
            console.log(typeof screen.value)
            if (screen.value.includes('.')) {
                alert('.')
                let decimal = total.toString().split('.')[1].length > 2
                alert(decimal)
                if (decimal) {
                    alert('plus de 2 chiffre après la virgule')
                    screen.value = total.toFixed(2).toString(); 
                }
                else screen.value = total.toString();
            }
            else {
                screen.value = total.toString();
            }
            break;
        case "spe":
            if (number === '.') {
                if (screen.value.includes('.')) return;
                screen.value += number;
            }
            if (number === 'CE') {
                screen.value = 0;
                total = 0;
            }
            break;
    }
    console.log("total => ", total)
}
console.timeEnd("lecture")     