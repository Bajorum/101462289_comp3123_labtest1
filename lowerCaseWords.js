function lowerCaseWords(arr) {
    return new Promise(function(resolve, reject) {
        if (!Array.isArray(arr)) {
            console.log("Input is not an array");
            reject("Input is not an array");
        } else {
            let filteredArr = arr.filter(function(item) {
                return typeof item === 'string';
            });

            let lowerCasedArr = filteredArr.map(function(str) {
                return str.toLowerCase();
            });

            console.log("Filtered and lower-cased array:", lowerCasedArr);
            resolve(lowerCasedArr);
        }
    });
}


lowerCaseWords([1, 'HELLO', 'World', true, 'JavaScript'])
    .then(function(result) {
        console.log(result);  
    })
    .catch(function(error) {
        console.error(error);
    });
