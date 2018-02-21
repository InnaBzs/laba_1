var readlineSync = require('readline-sync');


function rand(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

var b;

function MakeNumber() {
    var oldnum = '';
    var num;
    for (var i = 0; i < 4; i++) {
        do {
            num = rand(0, 9);

        } while (oldnum.indexOf(num) >= 0);
        oldnum = oldnum + num;
    }

    b = oldnum.split('').map(ch => parseInt(ch, 10))
    return b;
}
MakeNumber();

console.log(b);

var bulls;
var cows;



function GetAnswer() {
    // while(bulls!==4){
    var answer = readlineSync.question('Please write your variant: ');
    mas = Array.from(answer).map(ch => parseInt(ch, 10));
    // }

}

function Compare(userNumber, generatedNumber)
var bulls = 0;
var cows = 0;

for (var i = 0; i < 4; i++) {
    if (userNumber[i] === generatedNumber[i]) {
        bulls++;
    } else if (userNumber.indexOf(generatedNumber[i]) >= 0) {
        cows++;
    }

}

console.log('Bulls ' + bulls + ' Cows ' + cows);

if (bulls==4){
    console.log('Win!')
}

return bulls == 4;
}

do {
    var answer = readlineSync.question('Please write your variant: ');
    var mas = Array.from(answer).map(ch => parseInt(ch, 10));
} while (!Compare(mas, b));



