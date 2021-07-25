const express = require("express");
const router = express.Router();

function routes(app) {
  router.get("/test", (req,res,next)=>{
      res.status(200).json("welcome user route")
  })

  return router;
};

module.exports = routes;