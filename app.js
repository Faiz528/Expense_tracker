const express = require('express')
const app = express()
const cors = require('cors')
const Parser = require('body-parser')
const sequelize = require('./util/database')


app.use(cors())
app.use( Parser.json({extended :false}))

const expenseRoute = require('./routes/track')

app.use(expenseRoute)

  sequelize
    .sync()
    .then(result => {
     app.listen(3000)
    })
    
    .catch(err => {
      console.log(err);
    });
