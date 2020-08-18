const express = require('express');
const axios = require('axios');

const app = express();

app.get('/', (req,res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/teams', async (req, res, next) => {
  try {
    const gameStats = await axios.get("https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json");
    res.json(gameStats.data);
  }
  catch (err) {
    next(err)
  }
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
