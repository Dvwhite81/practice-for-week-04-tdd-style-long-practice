function myMap(inputArray, callback) {
    let results = [];
    for (let each of inputArray) {
        results.push(callback(each));
    }
    return results;
}

module.exports = myMap;