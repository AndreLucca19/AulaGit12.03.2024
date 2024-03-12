let inicio;
let fim;
let a = 1;
let b = 500;

if (a < b) {
    inicio = a;
    fim = b;
} else {
    inicio = b;
    fim = a;
}

while (inicio <= fim) {
    console.log(inicio);
    inicio++;
}