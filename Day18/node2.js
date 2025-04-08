const http = require("http");
const fs = require("fs");
const readline = require("readline");

let i = 0;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a port number: ", (inputPort) => {
    const port = parseInt(inputPort, 10);
    if (isNaN(port)) {
        console.log("Invalid port number.");
        rl.close();
        return;
    }

    const server = http.createServer((req, res) => {
        if (req.url === '/favicon.ico') return res.end();
        i++;
        res.end("Server just learned to walk");
        fs.appendFileSync("log.txt", `${i} : Server is walking at ( ${req.url} )\n`);
    });

    server.listen(port, () => {
        console.log(`Server is walking at ${port}`);
        rl.close();
    });
});
