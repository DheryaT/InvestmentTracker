const express = require('express')
const router = express.Router()

const {getPortfolios ,setPortfolio, updatePortfolio, deletePortfolio} = require('../controllers/portfolioController.js')

router.route('/').get(getPortfolios).post(setPortfolio)

router.route('/:id').put(updatePortfolio).delete(deletePortfolio)

module.exports = router 