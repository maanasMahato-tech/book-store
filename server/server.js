const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const { router } = require('./routes/routes');
const path = require('path');

const PORT = process.env.PORT || 5000;
const app = express();

dotenv.config({ path: "./config.env" });

app.use(express.json());
require('./database/database');



app.use(cors());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))
app.use('/api', router);





app.listen(PORT, () => {
    console.log(`server running at PORT: ${PORT}`);
})