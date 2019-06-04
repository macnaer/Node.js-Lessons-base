
// const fs = require('fs');
// console.log(fs);

// function Person(name){
//     this.name = name;
//     this.Hello = () => {
//         console.log(`Name = ${this.name}`);
//     }
// }

// const Bill = new Person("Bill");
// Bill.Hello();

// //REPL

// console.log(process.argv);

// const exec = require("child_process").exec;
// exec("dir ");


 const User = require('./classes/User');

const argv = process.argv.slice(2);

switch(argv[0]){
    case `--help`:
        console.log(`--help Show all info;`);
        console.log(`--version Show version;`);
        break;
    case `--version`:
        console.log(`v0.1.0`);
        break;
        case `--create`:
            let name = argv[1];
            let pass = argv[2];
            let user = new User(name, pass);
            user.ShowUser();
        break;
    default:
        console.log(`use --help To list all options`);
        break;
}
// switch(argv[1]){
//     case 
// }
//console.log(argv[1]);