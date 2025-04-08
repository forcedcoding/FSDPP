const http = require("http");

const fs = require("fs");
let i = 0;
const server =  http.createServer( (req,res)=>{
    if (req.url === '/favicon.ico') return res.end();
    i++;
    res.setHeader("Content-Type", "text/html");
    res.setHeader("my-name", "Random_Name");
    res.end("<h1 style='color : red' >Server just learned to walk</h1>");
    fs.appendFileSync("log.txt", `${i} : Server is walking at ( ${req.url} ) \n`);
});

const port = 6969;

server.listen(port,()=>{
    console.log(`Server is walking at ${port}`);
});
