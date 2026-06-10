const express = require('express');

const app = express();

const apiRoutes = require('./routes/apiRoutes');

app.get('/', (req, res) => {
    res.send('working');
})

app.use(express.json());

app.use('/api', apiRoutes);

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})
