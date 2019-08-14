const EventEmitter = require('events');
const fs = require('fs');

// saját eseményosztály létrehozása

class MyEventEmitter extends EventEmitter { }; // az új osztály
// megegyezik az eredeti EventEmitterrel, ezért üres marad a {}

// egy saját példány létrehozása az eseményből:
const joeEvent = new MyEventEmitter();
// most már tudom figyelni, az esemény a message lesz
joeEvent.on('message', (fileName, fileContent) => {
    // végül - utolsó lépésként a fileName és fileContent megadásával lesz 
    // lekezelve a függvény paramétere
    console.log(arguments)
    console.log(fileName, ': ', fileContent);
    console.log('message event fired');
});
// ki kell váltani a message eseményt, enélkül a kód kiszáll
// joeEvent.emit('message');
// az esemény nevének meg kell egyeznie azzal, amit figyelek
// setTimeout(() => {
//   joeEvent.emit('message');
// }, 5000);

fs.readFile('./files/test.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error(err);
    }
    joeEvent.emit('message', 'test.txt', data); // itt váltottam ki az eseményt
    // a message üzenettel, aztán a test.txt és data paramétereket
    // adom át a joeEvent függvénynek a callback-be
});

fs.readFile('./files/test2.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error(err);
    }
    joeEvent.emit('message', 'test2.txt', data); // az első függvény után
    // ezt is meghívom a test2.txt-vel
});

// az eseményt akárhányszor le tudjuk futtatni ellentétben a promise-szal