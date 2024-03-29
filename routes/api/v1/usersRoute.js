const router = require("express").Router()
const usersControllers = require("../../../controllers/usersControllers")

router.post('/users', usersControllers.create);
router.get('/users', usersControllers.index);
router.get('/users/:id', usersControllers.show);
router.put('/users/:id', usersControllers.edit);


module.exports = router;