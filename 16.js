//16. Write a JavaScript function to parse an URL.
function parseURL(url) {
    try {
        const parsedURL = new URL(url);
        return {
            protocol: parsedURL.protocol,
            hostname: parsedURL.hostname,
            port: parsedURL.port,
            pathname: parsedURL.pathname,
            search: parsedURL.search,
            hash: parsedURL.hash,
        };
    } catch (error) {
        return { error: "Invalid URL" };
    }
}

// Example usage:
const url = "https://www.ietdavv.edu.in/index.php";
const parsedURL = parseURL(url);
console.log(parsedURL);