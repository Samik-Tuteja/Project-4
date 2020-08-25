const express = require("express");
const app = express();
const port = 8500;

app.get("/", (req, res) => {
  res.send(
    "<h2> Write <code>/hello</code> to get 'Hello, World!' <br> Write <code>/hello/yourname</code> to get 'Hello,&lt;yourname&gt;!<h2> "
  );
});

app.get("/hello", (req, res) => {
  res.send("<h1>Hello, World!</h1>");
});

app.get("/hello/:id", (req, res) => {
  res.send(`<h1>Hello, ${req.params.id}!</h1>`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
