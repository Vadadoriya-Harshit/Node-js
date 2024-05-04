const express = require('express');
const app = express();
require('./db');
const cors = require('cors');
const apis = require('./route/route');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/CRUD', apis);

const port = process.env.PORT || 4000; // Change the default port to 4000

app.listen(port, () => {
    console.log(`Server running on localhost:${port}`);
});
