const http = require("http");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const port = 5173;
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
  ".ico": "image/x-icon"
};

http
  .createServer((req, res) => {
    const url = decodeURI(req.url.split("?")[0]);
    let file = path.join(root, url === "/" ? "index.html" : url.replace(/^\/+/, ""));
    if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
      const fallback404 = path.join(root, "404.html");
      if (fs.existsSync(fallback404)) {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end(fs.readFileSync(fallback404));
        return;
      }
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": types[path.extname(file).toLowerCase()] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  })
  .listen(port, () => console.log(`http://localhost:${port}`));
