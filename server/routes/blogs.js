const express = require("express");
const router = express.Router();
const blogsController = require('../controller/blogs')
function routes(app) {
  
  
  router.post("/category", blogsController.createCategory)
  router.get("/category",blogsController.getCategory)
  router.get("/category/:folder_id",blogsController.getOneCategory)

  router.get("/:folder_id",blogsController.processBlogs)
  router.post("/:folder_id",blogsController.postBlogs)

  router.get("/single/:id", blogsController.getOneBlog)

  router.get('/recommendation/:id',blogsController.getRecom)

  router.get("/", blogsController.getAllBlogs)

  

  
  return router;
};

module.exports = routes;