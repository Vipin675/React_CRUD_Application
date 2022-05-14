const mongoose = require('mongoose');

const DB = "mongodb+srv://dbvipin:dbvipinpassword@cluster0.rb5o4.mongodb.net/mernstack?retryWrites=true&w=majority";


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(DB).then(() => {
      console.log("DataBase Connected");
  });
}