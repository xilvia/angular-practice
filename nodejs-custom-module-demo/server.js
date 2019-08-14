const Maintainer = require('./module/maintainer');
const mt = new Maintainer('temp', /\.txt$/); // a txt fájlokat akarom
// kitakarítani. A "." escape-elve van, hogy ne vegye parancsnak, 
// hanem csak egy bármilyen karakternek

// példányosítottam a Maintainert, hogy használni tudjam
mt.flush();