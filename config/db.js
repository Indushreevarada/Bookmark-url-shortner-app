const mongoose = require('mongoose')
//configure mongoose to use global promises
mongoose.Promise = global.Promise

//establishing a db connection
mongoose.connect('mongodb://localhost:27017/my-apps-jan',{useNewUrlParser :true,useCreateIndex:true})
.then(function(){
    console.log('connected')
})
.catch(function(){
    console.log('error')
})

module.exports = {
    mongoose
}