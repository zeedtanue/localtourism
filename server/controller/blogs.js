const axios = require('axios')
const Category = require('../models/category.js')
const Blog = require('../models/blog.js')
const Comment = require('../models/comment')

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

exports.getOneCategory = async(req,res)=>{
    try {
        const category = await Category.findOne({"folder":req.params.folder_id})
        if(category) return res.status(200).json(category)
        else return res.status(404).json({message:"Not found"})
        
    } catch (error) {
        console.log(error)
        return res.status(500).json(error.message)
        
    }
}


exports.processBlogs = async(req, res)=>{
    try {
        const blogs = await Blog.find({folder:req.params.folder_id}).sort({'published':-1})
        
       
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
        const blogsDB= await Blog.find().sort({'published':-1}).limit(10)
        return res.status(200).json(blogsDB)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

exports.getOneBlog= async(req,res)=>{
    try {
        const blog = await Blog.findOne({"_id":req.params.id})
        if(blog) return res.status(200).json(blog)
        else return res.status(404).json({message:"Not found"})
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

exports.getRecom= async(req,res)=>{
    try {
        const db= await Blog.findOne({_id:req.params.id})
        if(db) {
            const recommendation = await Blog.aggregate([{ $match:{folder:db.folder}},{$sample:{size:3}}])
            return res.status(200).json(recommendation)}
        else return res.status(404).json({message:"Not found"})

        

    } catch (error) {
        return res.status(500).json(error.message)

        
    }
}

exports.getComments = async(req,res)=>{
    try {
        const comment = await Comment.find({"blog":req.params.id})
         return res.status(200).json(comment)
    } catch (error) {
        return res.status(500).json(error.message)

        
    }
}


exports.postComment = async(req,res)=>{
    try {
         const newComment = new Comment({
            blog    :   req.params.id,
            email   :   req.body.email,
            comment :   req.body.comment
         })
         const commentDB= await newComment.save()

         return res.status(200).json(commentDB)
        
    } catch (error) {
        console.log(error)

        return res.status(500).json(error.message)

        
    }
}


exports.postBlogsGeneral= async(req,res)=>{
    try {
        const data = req.body.data
        
        data.forEach(async(item)=>{
            const existingFeed= await Blog.findOne({title:item.title})
            
            if(!existingFeed){
                let newBlog = new Blog({
                    feed_id  :   item.feed_id,
                    folder   :   item.folder_id[0],
                    title    :   item.title,
                    permalink:   item.permalink,
                    content  :   item.content,
                    published:   item.published,
                    article_image:item.article_image,
                    author   :   item.author,
                    site_detals: item.site_detals
                })
                const newDB= await newBlog.save()
                console.log(newDB)
            }else console.log('sad')
            
        })
        const blogs = await Blog.find().sort({'published':-1}).limit(10)
        return res.status(200).json(blogs)
        
    } catch (error) {
        
    }
}


exports.searchTerm = async(req,res)=>{
    try {
        const searchResult = await Blog.find({content:{$regex: req.params.searchTerm, $options: "i"}})
      return res.status(200).json(searchResult)  
    } catch (error) {
        return res.status(500).json(error.message)

        
    }
}
