function resolvedPromise() {
    return new Promise(function(resolve) {
        console.log("Resolved promise started");
        setTimeout(function() {
            resolve("Resolved after 500ms");
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise(function(reject) {
        console.log("Rejected promise started");
        setTimeout(function() {
            reject("Rejected after 500ms");
        }, 500);
    });
}

resolvedPromise()
    .then(function(message) {
        console.log("Success:", message);
    });

rejectedPromise()
    .catch(function(error) {
        console.error("Error:", error);
    });
