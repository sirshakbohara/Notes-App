const express = require('express');
const app = express();

const apiRouter = require('./routes/api');

app.use(express.json())
app.use('/api', apiRouter);

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
});
