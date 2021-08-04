const mongoose = require ("mongoose")

const commentSchema = mongoose.Schema({
    blog: {type: mongoose.Schema.Types.ObjectId,ref:'blog' },
    email: {type: String, required:true},
    comment:{type:String, required:true}
},
{ timestamps : { 
    createdAt   : 'created_at',
    updatedAt   : 'updated_at' 
    }
}
)

module.exports = mongoose.model('comment', commentSchema,'comments');