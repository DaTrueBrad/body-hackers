const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;

const userController = require('./controllers/userController')
const adminController = require('./controllers/adminController')

//Middleware
app.use(express.json());
app.use(cors());

// User Endpoints
app.get('/api/login', userController.loginUser)
app.get('/api/userInfo', userController.getInfo)

// Admin Endpoints
app.get('/api/admin/getClientInfo', adminController.getClientInfo)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));