const mongoose = require("mongoose");

const soldierSchema = new mongoose.Schema({
    name:{
            type:String,
            required:true
        },
    level:{
        type:Number,
        required:true
    },
    level_score:{
        type:Number,
        required:true
    },
    soldier_stats: {
        type: Array,
        validate: {
          validator: function(arr) {
            return arr.length === 3; 
          },
          message: 'soldier_stats must have a length of 3' 
        },
        required: true 
      },
    soldier_menu: {
        type: Array,
        validate: {
          validator: function(arr) {
            return arr.length === 6; 
          },
          message: 'soldier_menu must have a length of 6' 
        },
        required: true 
      },
      tank:{
        type:Number,
        required:true
      },
      acw:{
        type:Number,
        required:true
      },
      engineer:{
        type:Number,
        required:true
      },
      gun:{
        type:Number,
        required:true
      },
      
    });

module.exports = mongoose.model("Soldier",soldierSchema);