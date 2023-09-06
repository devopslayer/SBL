let express = require('express');

let app = express();

const sheet = [
    {
        "year": 2020,
        "month": 12,
        "profitOrLoss": 25000,
        "assetsValue": 1234
    },
    {
        "year": 2020,
        "month": 11,
        "profitOrLoss": 1150,
        "assetsValue": 5789
    },
    {
        "year": 2020,
        "month": 10,
        "profitOrLoss": 2500,
        "assetsValue": 22345
    },
    {
        "year": 2020,
        "month": 9,
        "profitOrLoss": -1870,
        "assetsValue": 223452
    }
];

app.get('/sheet', (req, resp) => {
    resp.send(JSON.stringify(sheet))
    console.log("Inside sheet")
});

// app.use(express.static(''));

app.listen(3000, () => {
    console.log('This app is running on http://localhost:3000')
});