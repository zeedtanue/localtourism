const express = require('express');
const router = express.Router();
const usersController = require('../controller/users')

function routes(app) {
  router.get("/test", (req,res,next)=>{
      res.status(200).json("welcome user route")
  })
  
  router.post('/signup/:role', usersController.process_signup);


  return router;
};

module.exports = routes;