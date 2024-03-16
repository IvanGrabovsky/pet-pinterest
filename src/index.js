const express = require('express');
const app = express();

app.use(express.json());

const auth = require('./routes/auth')
const users = require('./routes/users')
const boards = require('./routes/boards')
const pins = require('./routes/pins')
const comments = require('./routes/comments')

app.use('/auth', auth)
app.use('/users', users)
app.use('/boards', boards)
app.use('/pins', pins)
app.use('/comments', comments)

app.get('/', (req, res) => {
  res.send('Hello World!!');
});

app.listen(3000, () => {
  console.log('App listening on port 3000!!!');
});