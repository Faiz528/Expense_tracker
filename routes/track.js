const express = require('express')

const route = express.Router()

const Control = require('../controller/track')

route.post('/add',Control.PostExpense)

route.get('/add' ,Control.GetExpense )

//route.get('/add/:id',Control.GetEditExpense)

route.delete('/delete/:id',Control.DeleteExpense)

//route.get('/edit/:id', Control.EditExpense)
module.exports = route