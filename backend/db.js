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
    },async( err, result)=>{
      if( err) console.log( "----------",err)
      else {
        console.log( " connected");
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray( function( err, data){
          if( err ) console.log(err );
          else console.log( data);
        })

      }

    });
    
}

module.exports = mongoDB;
