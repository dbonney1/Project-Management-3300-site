const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(express.static('./src'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log(`Server on port ${port}`);
});