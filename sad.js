let inicio;
let fim;
let a = 20;
let b = 30;

if (a < b) {
    inicio = a;
    fim = b;
} else {
    inicio = b;
    fim = a
}

while (inicio <= fim) {
    console.log(inicio);
    inicio++;
}