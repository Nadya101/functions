function solveQuadrQg(a, b, c) {
    if (a === 0) {
        alert("Значення А не може дорівнювати нулю.");
    }
    else {
        const D = ((-1) * b) * ((-1) * b) - (4 * a * c);
        if (D < 0) {
            alert("Рівняння не має коренівю");
        }
        else if (D === 0) {
            const x = -1 * b / 2 * a;
            alert("Відповідь: x = " + x);
        }
        else if (D > 0) {
            const x1 = (((-1) * b) + Math.sqrt(D)) / (2 * a);
            const x2 = (((-1) * b) - Math.sqrt(D)) / (2 * a);
            alert("Відповідь : x1 = " + x1 + ", " + "x2 = " + x2);
        }
        else {
            alert("Будь ласка, перевірне внесені дані!");
        }
    }
}


const a = parseInt(prompt("Enter A"));
const b = parseInt(prompt("Enter B"));
const c = parseInt(prompt("Enter C"));
alert(solveQuadrQg(a, b, c));
