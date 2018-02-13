const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.send({ message: 'test' });
});

app.listen(PORT, () => {
    console.log(`App is running on port: ${PORT}`);
});
