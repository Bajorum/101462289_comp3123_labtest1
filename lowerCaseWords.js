// lowerCaseWords.js

function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(arr)) {
            reject('Input is not an array');
        } else {
            const filteredArr = arr.filter(item => typeof item === 'string');
            const lowerCased = filteredArr.map(str => str.toLowerCase());
            resolve(lowerCased);
        }
    });
}

// Example usage:
lowerCaseWords([1, 'HELLO', 'World', true, 'JavaScript'])
    .then(result => console.log(result))  // Output: ['hello', 'world', 'javascript']
    .catch(error => console.error(error));
