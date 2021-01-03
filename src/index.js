const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');


const url = "mongodb://localhost:27017";


dotenv.config();
//connect to DB
mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to DB')
})


app.listen(3030, () => console.log('Server running......'));