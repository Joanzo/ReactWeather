var names = ['Andrew', 'Julie', 'Jen'];
/*
names.forEach( function(name){
    console.log('forEach ', name);
});


names.forEach((name) => {
    console.log('arrowFunc ', name);
});


// User Arrow Function whenever you think there is anonymous function
names.forEach((name) => console.log(name));

var returnMe = (name) => name + '!';
console.log(returnMe('Joanzo'));
*/
var person = {
    name: 'Andrew',
    greet: function() {
        names.forEach(function(name) {
            console.log(this.name + ' says hi to ' + name)
        });
        
        // Arrow function doesn't update 'this' keyword, it use its parent (person object) as reference
        names.forEach((name) => {
            console.log(this.name + ' says hi to ' + name)
        });
    }
}

person.greet();


// Challenge Area
function add(a,b) {
    return a + b;
}
console.log(add(1,3));
console.log(add(9,0));

var addStatement = (a,b) => {
    return a + b;
}
console.log(addStatement(1,3));

// Whatever after the '=>' will get returned if not added '{}'
var addExpression = (a,b) => a + b;
console.log(addExpression(9,0));