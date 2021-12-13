const mongoose = require('mongoose');

async function  connect()  {
    try{
        await mongoose.connect('mongodb+srv://Hieu:Hieu123@cluster0.lguo6.mongodb.net/users?retryWrites=true&w=majority',{
    });
    console.log('connect successfully!!');
}catch (error){
    console.log('fail');
}
}    
module.exports ={ connect};