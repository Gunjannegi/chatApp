const express = require('express');
const app = express();
const loginRoutes = require('./routes/login'); 
const inboxRoutes = require('./routes/inbox'); 



app.use(loginRoutes);
app.use(inboxRoutes);
app.listen(4002);