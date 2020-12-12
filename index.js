const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.static("./public"));


// app.get('/', (req, res) => {
//     res.json({
//         message: "URL shortner"
//     });
// });


app.post('/url/:id', (req, res) => {
    // get short URL by id
});

app.get('/:id', (req, res) => {
    // redirect to URL
});

app.post('/url', (req, res) => {
    // create short URL
});


const port = process.env.PORT || 1818;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});

