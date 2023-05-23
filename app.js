const express = require('express')
const app = express()
const cors = require('cors')
const Parser = require('body-parser')
const sequelize = require('./util/database')
const Track = require('./models/track')
const User = require('./models/user')

app.use(cors())
app.use( Parser.json({extended :false}))

const expenseRoute = require('./routes/track')

app.use(expenseRoute)
app.use((req,res,next)=>{
  User.findByPk(1).then(user=>{
    req.user=user;
    next();
  })
})
 
Track.belongsTo(User,{constraint:true,OnDelete:'CASCADE'})
User.hasMany(Track)
   sequelize
    .sync({force:true})
    .then(result => {
      return User.findByPk(1)
    }).then(user=>{
      if(!user){
        User.create({Name:"Faiz", Email:'mahmood@gmail.com'})
      }
      return user
      }).then(user=>{
        console.log(user)
        app.listen(3000)
      })
    .catch(err => {
      console.log(err);
    });
