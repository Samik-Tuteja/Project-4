require("es6-promise").polyfill();
require("isomorphic-fetch");

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your username ? ", function saveInput(name) {
  fetch(`https://api.github.com/users/${name}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(`Name: ${data.name || data.login}`);
      console.log(`location: ${data.location || "NA"}`);
      console.log(`Bio: ${data.bio || "NA"}`);
      console.log(`Followers: ${data.followers}`);
      console.log(`Following: ${data.following}`);
      console.log(`Repositories: ${data.public_repos}`);
    })
    .catch((err) => {
      console.log(err);
    });
  fetch(`https://api.github.com/users/${name}/repos`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.map((repo) => repo.name));
    });
  rl.close();
});
