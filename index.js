/*let text = "O Neil Dias é estudante do ITEL";
let letter = "e";
let times = 0;

for(const char of text.toLowerCase()){
    if (char === letter) times++;
}
console.log(`A letra (${letter}) se repete ${times} vezes`)

const fruits = ["manga", "banana", "maçã", "pÊssego"]
for(let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}*/


/*
const rl = require("node:readline");
const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
});
prompt.question ("Qual número deseja ver a tabuada? ", answer => { 
    const number = Number.parseInt(answer);
    if (Number.isNaN(number)){
        console.log("X 0 número digitado é inválido!");
    } else {
        console.log(`A tabuada do ${number} é:`); 
        for(let i=1; i<= 10; i++){
            console.log(`${i} x ${number} = ${i* number}`)
    }
        }   
    prompt.close();
});*/
/*
let count = 0
while(count <= 10){
    console.log(count)
    count++
}*/

/*let current;
let times = 0;
const expected = 8;

while(current !== expected){
    current = Math.floor(Math.random() * (10 + 1));
    console.log(current);
    times++;
}
console.log(`O número ${expected} foi sorteado após ${times} tentativas.`);*/

let count = 0;
while(count <= 10){
    count++

    if(count % 2 == 0){
        console.log(count + ` é par`);
        break;
    };
    console.log(count)
}
