const mongoose = require ("mongoose")

const authorSchema= mongoose.Schema({
  
    name :       {type:String}
})

const siteDetailsSchema= mongoose.Schema({
    site_name   :   {type:String},
    site_link:   {type:String}
})
const commentSchema = mongoose.Schema({
    email   :   {typr:String},
    comment :   {type:String}
})

const blogSchema = mongoose.Schema({
    feed_id     :   {type:String,required:true},
    folder      :   {type:Number, required:true},
    title       :   {type:String,required:true},
    permalink   :   {type:String},
    content     :   {type:String},
    published   :   {type:Date},
    article_image:  {type:String},
    author      :   [authorSchema],
    site_detals :   {siteDetailsSchema},
    comments    :   [{type: mongoose.Schema.Types.ObjectId,ref:'comment'}]

})

module.exports = mongoose.model('blog', blogSchema,'blogs');
