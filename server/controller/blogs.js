const axios = require('axios')
const Category = require('../models/category.js')
const Blog = require('../models/blog.js')

exports.createCategory = async(req, res)=>{
    const body= req.body
    try {
        const newCategory= new Category(
            {
                name       :   req.body.name,
                folder      :   req.body.folder
            }
        )
        await newCategory.save()
        return res.status(201).json(newCategory) 
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
    }
}

exports.getCategory = async(req, res)=>{
    try {
        const categories =await Category.find()
        return res.status(200).json(categories)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
        
    }
}


exports.processBlogs = async(req, res)=>{
    try {
        const blogs = await Blog.find({folder:req.params.folder_id})
        
       
        return res.status(200).json(blogs)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)

    }
}
exports.postBlogs= async(req,res)=>{
    try {
        const data = req.body.data
        data.forEach(async(item)=>{
            const existingFeed= await Blog.findOne({feed_id:item.feed_id})
            if(!existingFeed){
               let newBlog = new Blog({
                   feed_id  :   item.feed_id,
                   folder   :   req.params.folder_id,
                   title    :   item.title,
                   permalink:   item.permalink,
                   content  :   item.content,
                   published:   item.published,
                   article_image:item.article_image,
                   author   :   item.author,
                   site_detals: item.site_detals
               })
               await newBlog.save()
            }
            
        })
        const blogs = await Blog.find()

        return res.status(200).json(blogs)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
        
    }
}
exports.getAllBlogs= async(req,res)=>{
    try {
        const blogsDB= await Blog.find()
        return res.status(200).json(blogsDB)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}