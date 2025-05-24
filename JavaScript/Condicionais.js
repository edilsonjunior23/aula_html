//if, else if, else - para executar blocos de códigos com base em condições lógicas

let idade = 18;

if (idade >= 18) {
    console.log("você é maior de idade.")
} else {
    console.log("Você é menor de idade.")
}

// If, Else if, Else, pra validar deerminada operação quantas vezes for nescessário

let nota = 7;

if (nota >= 9) {
    console.log("Excelente!");
} else if (nota >= 6) {
    console.log("Reprovado!");
} else [
    console.log("Reprovado!")
]

// Switch - para verificar múltiplos valores de uma variável, 
//(Para trabalhar com conversão de dados, como domínios de banco de dados)

let dia = "segunda"

switch(dia) {
    case "segunda" :
        console.log("Começo de semana");
        break;
    case "sexta" :
        console.log("Sextou!");
        break;
    default:
        console.log("Outro dia qualquer");
}

// For -- usado quando sabemos quantas vezes queremos repetir (loops)

    let i;

    for (i = 0; i < 5; i++) {
        console.log("Repetição número", i);
    }

//While - Usando quando não sabemos exatamente quantas vezes, mas temos uma condição (loops)

    let contador = 0;

    while (contador < 3) {
        console.log("Valor: ", contador);
        contador++;
    }

//do... while - O bloco será executado pelo menos uma vez, memso que a conidção seja falsa

    let a = 0;

    do {
        console.log("Executar pelos menos uma vez:", i);
        a++;
    } while (a < 1);

// break - Encerra o Loop ou Switch

     for (let i = 0; i < 10; i++) {
        if (i === 5) break;
        console.log(i);
     }

// Continue - interrompe apenas a iteração atual e continua o loop

     for(let i = 0; i < 5; i++) {
        if (i === 2) continue;
        console.log(i); // pula o 2
     }