const http = require("http");
const fs = require("fs");

const homeContent = fs.readFileSync("home.html");
const projectContent = fs.readFileSync("project.html");
const registrationContent = fs.readFileSync("registration.html");

const args = process.argv.slice(2);
const port = args.includes('--port') ? parseInt(args[args.indexOf('--port') + 1]) : 5000;

http.createServer((request, response) => {
  let url = request.url;
  response.writeHead(200, { "Content-Type": "text/html" });
  switch (url) {
    case "/project":
      response.write(projectContent);
      break;
    case "/registration":
      response.write(registrationContent);
      break;
    default:
      response.write(homeContent);
      break;
  }
  response.end();
}).listen(port, (error) => {
  if (error) {
    console.log("Error starting server:", error);
  } else {
    console.log(`Server listening on port ${port}`);
  }
});
