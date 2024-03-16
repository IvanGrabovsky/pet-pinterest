const express = require('express');
const { getList, create } = require('../modules/user/service');
const UserService = require('../modules/user/service');
const router = express.Router();

router.get('/user', async (req, res) => {
  // const testUser = await create()
  const users = await getList();
  // res.json({ testUser, users });
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await UserService.getById(req.params.id);
  res.send(user);
});

router.put('/:id', async (req, res) => {
  const user = await UserService.updateById(req.params.id, req.body);
  res.send(user);
});

module.exports = router;