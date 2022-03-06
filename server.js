require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const routes = require('./routes');

//SECTION: Middleware
app.use(cors());
app.use(express.json());

//SECTION: Routes
app.use('/student', routes.studentRoutes);
app.use('/note', routes.noteRoutes);
app.use('/quiz', routes.quizRoutes);
app.use('/subject', routes.subjectRoutes);

//SECTION: Server Bind
const _port = process.env.PORT || 4500
app.listen(_port, () => {
    console.log(`app listening on port: ${_port}`);
});