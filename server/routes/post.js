
const express = require("express");
const Post = require('../models/post'); 
const routes = express.Router();


routes
  .post('/Create', async (req, res) => {
        try
         {
            const post = await Post.create(req.body.userid, req.body.text,req.body.location);
            res.send({post});
          } 
          
          catch(error) 
          {
            res.status(401).send({ message: error.message });
          }  
    })
  

  .post('/Read', async (req, res) => {
    try 
    {
      const post = await Post.read(req.body._id,req.body.userid);
      res.send(post);
    } 
    catch(error) 
    {
      res.status(404).send({ message: error.message }); 
    }
  })
  
  .put('/Update', async (req, res) => {
    try 
    {
      const post = await Post.update(req.body._id, req.body.userid, req.body.text);
      res.send({post});
    } 
    catch(error) 
    {
      res.status(404).send({ message: error.message });
    }
  })

  .delete('/Delete', async (req, res) => {
    try 
    {
      await Post.deletes(req.body._id, req.body.userid);
      res.send({ success: "Post is deleted" });
    } 
    catch(error) 
    {
      res.status(404).send({ message: error.message });
    }
  })


module.exports = routes;