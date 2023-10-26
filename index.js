const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = process.env.PORT;

conn.sync({ force: false }).then(() => {
server.listen(PORT, () => {
  console.log(`Survey Server listening in port ${PORT}...`);
})
}).catch(error => console.error("es un error", error));

