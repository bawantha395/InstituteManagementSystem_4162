const express = require('express');
const MarkController = require('../controller/mark')

const router = express.Router()


const verifyToken = require('../middlewares/verifyToken')

router.post('/', MarkController.create);
router.put('/:id', MarkController.update)
router.delete('/:id', MarkController.delete)
router.get('/all',  MarkController.getAll)
router.get('/:id', MarkController.getOne)
router.get('searchResults', MarkController.search)




module.exports = router;