// promises.js

function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved after 500ms');
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('Rejected after 500ms');
        }, 500);
    });
}

// Example usage:
resolvedPromise().then(msg => console.log(msg));  // Output: 'Resolved after 500ms'
rejectedPromise().catch(err => console.error(err));  // Output: 'Rejected after 500ms'
