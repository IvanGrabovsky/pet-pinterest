const express = require('express');
const router = express.Router();

router.get('/board', (req, res) => {
  res.send('Board');
});

router.get('/users/:userId', (req, res) => {
  res.send(req.params.userId,);
});

router.get('/:id', (req, res) => {
  res.send(req.params.userId);
});

router.put('/', (req, res) => {
  res.send('Update');
});

module.exports = router;