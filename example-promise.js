/*
function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('Denpasar', function(err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});

function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(79);
            reject('City not found');
        }, 1000);
    })
}

getTempPromise('Denpasar').then(function(temp){
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error', err);
});
*/
// Challange Area
function addPromise(a,b) {
    return new Promise(function(resolve, reject){
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a+b);
        } else {
            reject("It's Not a Number");
        }
    });
}

addPromise(4,2).then(function(sum){
    console.log('Total Number: ' + sum);
}, function(err) {
    console.log(err);
})