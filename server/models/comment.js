const mongoose = require ("mongoose")

const commentSchema = mongoose.Schema({
    blog: {type: mongoose.Schema.Types.ObjectId,ref:'blog' },
    email: {type: String, required:true},
    comment:{type:String, required:true}
})

module.exports = mongoose.model('comment', commentSchema,'comments');