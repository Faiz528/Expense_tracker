let myform=document.getElementById("extra")

myform.addEventListener('submit',save)
async function save(event){
    event.preventDefault();
    const expense = event.target.expense.value;
    const purpose = event.target.purpose.value;
    const category = event.target.category.value;
    my ={
        expense,
        purpose,
        category


    }
    console.log(my)
try{
  const response =await axios.post("http://localhost:3000/add",my)

    onscreen(response.data)
    console.log(response)


}
catch(err){
    console.log(err)
}
}


window.document.addEventListener("DOMContentLoaded",async ()=>{
    try{
 const response =  await axios.get("http://localhost:3000/add");
 console.log(response)
  for(var i =0;i<response.data.length ; i++)
        onscreen(response.data[i])

    }
    catch(error){
        console.log(error)
    }
 
})

async function onscreen(user)
{

  try{ 
    const childHTML = ` 
    <li id=${ user.id}> 
      Amount: ${user.Expenses}<br> 
      Purpose: ${ user.Purpose}<br>
      Category :${ user.Category}
      <button onclick="remove('${ user.id}')">DELETE</button></form> 
      <button onclick="edit('${ user.id}')">EDIT</button> 
    </li> 
  ` 
  userList.innerHTML += childHTML 
  } catch (err) { 
    console.log(err) 
  }
}

async function remove(userId)
{
    try{
     await axios.delete(`http://localhost:3000/delete/${userId}`)
     userList.remove(userId)
     window.location.reload();
    }
    catch(err){
        console.log(err)
    }
}


 /*   var newli =document.createElement('li');
     var text1 = document.createTextNode(expense+"-"+purpose+"-"+id);
    newli.appendChild(text1);
   var ul = document.querySelector('ul');
   ul.appendChild(newli);
   const deletes = document.createElement('input');
   deletes.type='button';
   deletes.value="Delete Expense";
   newli.appendChild(deletes);
   
   //var but = document.createElement('button');
   //var del = document.createTextNode('Delete');
   //but.appendChild(del);
   //ul.appendChild(but);
   deletes.onclick= ()=> {
       localStorage.removeItem(expense);
       ul.removeChild(newli);
   }

   // Creating edit button
   const edit = document.createElement('input');
   edit.type='button';
   edit.value="Edit Expense";
   newli.appendChild(edit);
   edit.onclick= ()=> {
        event.target.expense.value= expense;
        event.target.purpose.value= purpose;
       localStorage.removeItem(expense);
       ul.removeChild(newli);
   }
}*/