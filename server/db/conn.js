const mongoose = require("mongoose");

const DB = process.env.DB;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB).then(() => {
    console.log("DataBase Connected");
  });
}
