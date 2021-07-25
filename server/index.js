const express = require("express");
const next = require("next");
const db = require("./config/db");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

//env file

const logger = require('./lib/logger')


app
  .prepare()
  .then(() => {
    require('dotenv').config()

    const server = express();

    db.mongo_conn.once('open', ()=>{logger.info('Connected to mongo')})
    db.mongo_conn.on('error', ()=>{logger.error('MongoDB connection error')})
    
    const showRoutes = require("./routes/index.js");
    const userRouter = require('./routes/users.js')

    server.use("/api/index", showRoutes(server));
    server.use("/api/user", userRouter(server));
    
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      logger.info(`> Ready on ${PORT}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });