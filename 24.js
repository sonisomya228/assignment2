/*24. Write a JavaScript program that uses a try-catch block to catch
and handle a 'SyntaxError' when parsing an invalid JSON string.*/
const invalidJSONString = '{ "name": "John", "age": 30, "city": "New York", }';

try {
    const parsedJSON = JSON.parse(invalidJSONString);
    console.log(parsedJSON);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("Invalid JSON string:", error.message);
    } else {
        throw error; // rethrow the error if it's not a SyntaxError
    }
}