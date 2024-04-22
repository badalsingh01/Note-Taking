const URL='';
const mongoose=require('mongoose');
const promise=mongoose.connect(URL);
promise.then(data=>{
    console.log('DB Connected...');
}).catch(err=>{
    console.log('Error During DB Connection ', err);
})
module.exports=mongoose;