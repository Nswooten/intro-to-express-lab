// import modules

import express from 'express'
import { cats } from './data/cat-data.js'

// create Express app

const app = express()

// configure the app (app.set)

app.set("view engine", "ejs")

// mount Middleware (app.use)



// mount routes

app.get("/", function(req, res){
  res.send("<h1>meow</h1>")
})

app.get("/", function(req, res){
  res.redirect("/home")
})

app.get('/cats', function(req, res){
  res.render("cats/index", {
    cats : cats
  })
})

// tell the app to listen on port 3000

app.listen(3000, function() {
  console.log('Listening on port 3000')
})