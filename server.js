const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path')

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/ping', function (req, res) {
  return res.send('pong');
 });

app.post('/api/weather', function(req, res){
  let apiKey = '';
  let units = 'imperial';
  let city = req.body.query;
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}&units=${units}`

  request(url, function(error, response, body) {
    if (error || response.statusCode !== 200){
      res.send({});
    } else if (!error && response.statusCode === 200) {
      res.send(body);
    }
  })
});

if (process.env.NODE_ENV === 'idontknow') {
  app.use(express.static(path.join(__dirname, 'client/build')))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
})

app.listen(port, () => console.log(`Listening on port ${port}`));
