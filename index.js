const express = require('express')

const app = express();
const port = 8000;


app.get('/', (req, res) => {
    console.log(req.url);
    res.send('hello');
})

app.get('/testEndpoint', (req, res) => {
    res.json({
        title: 'hello world!',
        body: 'this is one of json property I created'
    })
})

app.get('/user', (req, res) => {
    res.json({
        firstName: 'Thien',
        lastName: 'Nguyen'
    })
})

app.get('/users', (req, res) => {

    const jsonArr = []
    for (let i = 0; i < 5; i++) {
        var jsonObj = {
            firstName: `test firstname ${i}`,
            lastName: `test lastname ${i}`
        }
        jsonArr.push(jsonObj)
    }
    res.json(jsonArr)
})

app.post('/testPost', (req, res) => {
    const postData = req.url;
    console.log(postData);
    res.json({
        message: 'post request recieved!!',
        reqDataURL: `endpoint: ${postData}`
    })
})


app.listen(process.env.PORT || port, () => console.log(`App available on http://localhost:${port}`)) 