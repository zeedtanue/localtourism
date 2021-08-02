const express = require("express");
const next = require("next");
const db = require("./config/db");
const mongoose = require('mongoose')


const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const morgan = require('morgan')

const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
//env file

const logger = require('./lib/logger')
// mongoose.connect("mongodb+srv://tamzeed:tamzeed5521@cluster0.zdqjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true})
//   .then(() => logger.info('Database Connected!'))
//   .catch(err => logger.error(err));

app
  .prepare()
  .then(() => {
    require('dotenv').config()

    const server = express();

    db.mongo_conn.once('open', ()=>{logger.info('Connected to mongo')})
    db.mongo_conn.on('error', ()=>{logger.error('MongoDB connection error')})
    
    const showRoutes = require("./routes/index.js");
    const userRouter = require('./routes/users.js')
    const blogsRouter = require('./routes/blogs.js')

    server.use(morgan('dev'))
    server.use(cookieParser())
    server.use(express.json())
    server.use(express.urlencoded({ extended: false}))
    server.use(cors())


    //routes
    server.use("/api/index", showRoutes(server));
    server.use("/api/user", userRouter(server));
    server.use("/api/blogs", blogsRouter(server) );

    
    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(PORT, err => {
      if (err) throw err;
      logger.info(`> Ready on ${PORT}`);
    });
  })
  
  .catch(ex => {
    logger.error(ex.stack);
    //console.error(ex.stack);
    process.exit(1);
  });