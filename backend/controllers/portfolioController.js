const asyncHandler = require('express-async-handler')

const getPortfolios =  asyncHandler(async (req, res) => {
    res.status(200).json({ message: "get portfolios"})
})

const setPortfolio = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: "Set portfolios"})
})

const updatePortfolio = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `Update portfolio  ${req.params.id}`})
})

const deletePortfolio = asyncHandler(async (req, res) => {
    res.status(200).json({ message: `delete portfolio ${req.params.id}`})
})

module.exports = {
    getPortfolios,
    setPortfolio,
    updatePortfolio,
    deletePortfolio
}