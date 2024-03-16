const express = require('express');
const router = express.Router();

router.get('/boards/:boardId', (req, res) => {
    res.send(req.params.id);
});

router.get('/:id', (req, res) => {
  res.send(req.params.id);
});

router.post('/', (req, res) => {
    res.send('Created');
  });

router.delete('/:id', (req, res) => {
  res.send('Deleted');
});

module.exports = router;