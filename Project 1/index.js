var fs = require("fs");

fs.unlink("output.txt", (err) => {
  if (err) throw err;
});

fs.readFile("input.txt", "utf-8", (err, ques) => {
  if (err) throw err;
  const math = ques.split("\r\n");
  math.forEach((element) => {
    const ans = eval(element) + "\r";
    fs.appendFile("output.txt", ans, (err) => {
      if (err) throw err;
    });
  });
  console.log("Output file updated");
});
