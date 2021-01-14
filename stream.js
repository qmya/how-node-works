//Let say if we want to read a large file from the file system and then sent it to the client side we use streams for that
const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
  console.log("Request is recieved!");
  //solution:1
  //   fs.readFile("test-file.txt", (err, data) => {
  //     if (err) console.log(err);
  //     res.end(data);
  //   });
  //solution:2 (STREAMS)
  //   const readable = fs.createReadStream("test-file.txt");
  //   readable.on("data", (chunk) => {
  //     //so we send the response to the client
  //     res.write(chunk); //res is a writable stream
  //   });
  //   //we also have to handle the data when the stream data is finished
  //   readable.on("end", () => {
  //     res.end();
  //   });
  //   //we can also make an error stream
  //   readable.on("error", (err) => {
  //     console.log(err);
  //     res.statusCode = 500;
  //     res.end("File not found!");
  //   });
  //Solution:03 (Pipe operators available on all stream , it will fixed the back pressure )
  const readable = fs.createReadStream("test-file.txt");
  readable.pipe(res); //readableSource.pipe(writabledestinations)
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Server is listening to the port 8000");
});
