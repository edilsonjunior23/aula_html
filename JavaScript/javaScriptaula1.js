// let nome = "Edilson";  // váriavel mutavel
// const idade = 36;      // Constante
// var cidade = "Brasília"; // forma antiga (evite se possivel)

// alert("Pop-up na tela");
// document.write("escrito direto na página"); */


// let a = 10, b = 3;
// document.write("Soma: " + (a + b) + "<br>")   // 13
// document.write("Subtração: " + (a -b) + "<br>")  // 7
// document.write("Multiplicação: " + (a * b)  +"<br>") // 30
// document.write("Divisão: " + (a / b) + "<br>") // 3.333
// document.write("Resto: " + (a % b) + "<br>") // 1
// document.write("Potência: " + (a ** b) + "<br>")  // 1000

// a += 5; // a agora é 15
// b++; // b agora é 4

// document.write("Novo alor de a: " + a + "<br>")
// document.write("Novo valor de b: " + b + "<br>")

let a = 10;
let b = 4;

console.log("Valores iniciais:");
console.log("a = " + a);
console.log("b = " + b);

//Atribuições aritiméticas
a += 5;  // a - b + 5-> 15
console.log("a += 5 -> " + a);

b -= 2;  // b - b - 2 -> 2
console.log ("b -= 2 -> " + b);

a *= 2; // a = a * 2 -> 30
console.log("a *= 2 -> " + a);

b /= 2; // b = b / 2 - 1
console.log("b /= 2 -> " + b);

a %= 7; // a = a % 7 -> 2
console.log("a **= 3 -> " + a);

// Incremento e Decremento
let x = 10;
console.log("\nIcremento e decremento:");
console.log("x = " + x);

x++; // Pós Incremento
console.log("x++ -> " + x);

x--; // Pós -decremento
console.log("x-- -> " + x);

++x; // Pré-incremento
console.log("++x -> " + x);

--x; // Pré-Decremento
console.log("--x -> " + x);

// Negação numérica
let y = 7;
console.log("\nNegação numérica:");
console.log("y = " + y);
console.log("-y -> " + (-y));

