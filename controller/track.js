const Expense = require('../models/track')

exports.PostExpense= (req,res,next)=>{

    const amounts = req.body.expense
    const purposes = req.body.purpose
    const categorys = req.body.category

    console.log(req.body)

    Expense.create({
        Expenses : amounts,
        Purpose : purposes,
        Category : categorys
    }).then(result=>{
        console.log(result)
        res.json(result)
    }).catch(err=>{
        console.log(err)
    })
}

exports.GetExpense= (req,res,next)=>{
    Expense.findAll().then(result=>{
        res.json(result)
    }).catch(err=>{
        console.log(err)
    })
}



exports.DeleteExpense= (req,res,next)=>{
    Expense.findByPk(req.params.id).then(user=>{
       return user.destroy()
    }).then(result=>{
        res.json(result)
    }).catch(err=>{
        console.log(err)
    })
}

