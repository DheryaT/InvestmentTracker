const asyncHandler = require('express-async-handler')

const portfolioSchema = require('../models/portfolioModel')
const userModel = require('../models/userModel')

const getPortfolios =  asyncHandler(async (req, res) => {

    const portfolios = await portfolioSchema.find({user: req.user.id})

    res.status(200).json(portfolios)
})

const setPortfolio = asyncHandler(async (req, res) => {
    if(!req.body.name){
        res.status(400)
        throw new Error('Please add a name field')
    }
    
    const portfolio = await portfolioSchema.create({
        name: req.body.name,
        user: req.user.id
    })

    res.status(200).json(portfolio)
})

const updatePortfolio = asyncHandler(async (req, res) => {
    const portfolio  = await portfolioSchema.findById(req.params.id)
    if(!portfolio){
        res.status(400)
        throw new Error('Portfolio not found')
    }



    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }

    if(portfolio.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('wrong user')
    }

    const updatedPortfolio = await portfolioSchema.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedPortfolio)
})

const deletePortfolio = asyncHandler(async (req, res) => {
    const portfolio  = await portfolioSchema.findById(req.params.id)
    if(!portfolio){
        res.status(400)
        throw new Error('Portfolio not found')
    }



    if(!req.user){
        res.status(401)
        throw new Error('user not found')
    }

    if(portfolio.user.toString() !== req.user.id){
        res.status(401)
        throw new Error('wrong user')
    }
 

    const deletedPortfolio = await portfolioSchema.findByIdAndRemove(req.params.id)

    res.status(200).json({ message: " delete"} )
})

module.exports = {
    getPortfolios,
    setPortfolio,
    updatePortfolio,
    deletePortfolio
}