const express = require('express');
const movieRouter = require('./src/routes/moviesRoutes');
const myRouter = require('./src/routes/myRouter');

const app = express();

// Middleware to automatically parse JSON request bodies
app.use(express.json());

// Use defined routers
app.use('/example', myRouter);
app.use('/movies', movieRouter);

app.listen(3000, () => {
    console.log('listening on http://localhost:3000');
});
