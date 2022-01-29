const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

const userController = require('./controllers/userController')

//Middleware
app.use(express.json());
app.use(cors());

//Put endpoints here
app.get('/api/login', userController.loginUser)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));