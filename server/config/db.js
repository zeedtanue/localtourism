const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)

mongoose.connect("mongodb+srv://tamzeed:tamzeed5521@cluster0.zdqjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",(err,db)=>{
    if(err){
        throw(err)
    }
});

let conn= mongoose.connection;

module.exports = {
    mongo_conn: conn
}