const express = require('express')

const app = express();
const port = 8000;
app.get('/', (req, res) => {
    console.log(req.url);
    res.send('hello');
})

app.listen(process.env.PORT || port, () => console.log(`App available on http://localhost:${port}`)) 