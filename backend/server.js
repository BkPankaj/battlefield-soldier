const express = require('express');
const mongoose = require("mongoose");
const Soldier = require("./model/soldierModel");
const app = express();
const PORT = 3001;
const cors = require('cors');
app.use(cors());
app.use(express.json());
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    console.log("DB Connected");
})
.catch((err) =>{
    console.log(err.message);
});

// Soldier.create({         //To insert data in MongoDB for testing
//     name:"Pankaj Borade",
//     level:7,
//     level_score:90,
//     soldier_stats: [48, 602, 0.41],
//     soldier_menu: [120, 58, 72,44,65,45],
//     tank:12,
//     acw:4,
//     engineer:740,
//     gun:27
//   })

app.get('/api/data', (req, res) => {
    Soldier.find()
    .then(data => res.json(data[0]))
    .catch(err => res.json(err))
  });

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });