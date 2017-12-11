var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function(name){
//     console.log('forEach', name);
// });

// names.forEach((name) => {
//     console.log('forEach', name);
// });

// names.forEach((name) => console.log('forEach', name));

// var returnMe = (name) => name+'!';
// console.log(returnMe('Not'));

var person = {
    name: 'Patinya',
    greet: function(){
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name);
        });
    }
}

person.greet();

// Challenge Area
function add(a, b) {
    return a + b;
}

// addStatement
var addStatement = (a, b) => {
    return a+b;
}
console.log(addStatement(1, 3));
// addExpression
var addExpression = (a, b) => a+b;
console.log(addExpression(4, 7));

// console.log(add(1, 3));
// console.log(add(9, 0));