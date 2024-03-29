const router = require("express").Router();
const transactionControllers = require("../../../controllers/transactionsControllers");

router.post('/transactions', transactionControllers.create);
router.get('/transactions', transactionControllers.index);
router.get('/transactions/:transaction', transactionControllers.show);


module.exports = router;