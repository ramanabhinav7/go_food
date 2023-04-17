const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

async function mongoDB() {
  await mongoose
    .connect(DB, {
      useNewUrlParser: true,
    }, async (err, result) => {
      if (err) console.log("----------", err)
      else {
        console.log(" connected");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function (err, data) {
          const foodCategory = await mongoose.connection.db.collection("food_category");

          foodCategory.find({}).toArray(function (err, catData) {
            if (err) console.log(err);
            else {
              
              global.food_items = data;
              global.food_category = catData;
              

            }
           


          })
          
          // console.log(global)
          // if( err ) console.log(err );
          // else{
          //   global.food_items = data;
          //   console.log(global.food_items)
          // //   // global.food_items = data;
          // //   global.food_category = catData;
          // //   console.log(global.food_category)

          // }
        })

      }

    });

}

module.exports = mongoDB;
