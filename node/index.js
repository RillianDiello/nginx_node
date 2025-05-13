const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");
const connection = mysql.createConnection(config);
connection.query(
  `CREATE TABLE IF NOT EXISTS people (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255))`
);

function generateRandomName() {
  const names = ["Rillian", "Diello", "Lucas", "Pires", "Full", "Cycle"];
  return names[Math.floor(Math.random() * names.length)];
}
app.get("/", (req, res) => {
  const name = generateRandomName();
  console.log(`Inserting name: ${name}`);
  connection.query(`INSERT INTO people(name) VALUES(?)`, [name], (err) => {
    if (err) return res.status(500).send("Erro ao inserir no banco");
    connection.query(`SELECT name FROM people`, (err, results) => {
      if (err) return res.status(500).send("Erro ao buscar no banco");
      res.send(
        `<h1>Full Cycle Rocks!</h1><ul>${results
          .map((row) => `<li>${row.name}</li>`)
          .join("")}</ul>`
      );
    });
  });
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
