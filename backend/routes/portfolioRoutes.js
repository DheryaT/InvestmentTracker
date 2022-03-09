const express = require('express')
const router = express.Router()

const {protect} = require('../middleware/authMiddleware')

const {getPortfolios ,setPortfolio, updatePortfolio, deletePortfolio} = require('../controllers/portfolioController.js')

router.route('/').get(protect, getPortfolios).post(protect, setPortfolio)

router.route('/:id').put(protect, updatePortfolio).delete(protect, deletePortfolio)

module.exports = router 