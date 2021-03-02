const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Choose a side heads / tails : ', name => {
    let rand = Math.random();
    console.log(rand < 0.5 ? 'heads' : 'Tails');
    readline.close();
});
