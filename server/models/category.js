const mongoose = require ("mongoose")

const categorySchema = mongoose.Schema({
    name: {type: String, required:true},
    folder:{type:Number, required:true}
})

module.exports = mongoose.model('category', categorySchema,'categories');