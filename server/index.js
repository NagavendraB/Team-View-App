import express from 'express';
import moment from 'moment';

import {team} from '../src/api/team';

const app = express();
const port = 3001;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Nestbirds App listening on port ${port}`);
});

// API end point load the questions
app.get("/team", function (req, res) {
  res.status(200).send(team);
});