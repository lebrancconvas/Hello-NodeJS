var ilove = function() {
    console.log('I fucking love you');
}

function shift(array, position, numb) {
    if (position === 'right') {
        if (numb + 1 < array.length) {
            new_array = [];
            new_array[0] = array[numb - 1];
            new_array[1] = array[numb];
            new_array[2] = array[-1 * (numb + 1 - array.length)];
            console.log(new_array);
        } else {
            console.log('Mother Fucker');
        }
    }
}



exports.ilove = ilove;
exports.shift = shift;