
const express = require("express");
const Users = require('../models/user'); 
const routes = express.Router();


routes
  .post('/Login', async (req, res) => {
    try {
      const user = await Users.login(req.body.userid, req.body.password);
      console.log(userid);
      console.log(password);
      res.send({...user});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .post('/Register', async (req, res) => {
    try {
      const user = await Users.register(req.body.userid, req.body.password, req.body.email,req.body.dateofbirth);
      res.send({...user});
    } catch(error) {
      res.status(401).send({ message: error.message }); 
    }
  })

  .put('/Update', async (req, res) => {
    try {
      const user = await Users.updatepassword(req.body._id, req.body.password);
      res.send({...user, password: undefined});
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

  .delete('/Delete', async (req, res) => {
    try {
      await Users.deleteuser(req.body._id);
      res.send({ success: "Account is Deleted" });
    } catch(error) {
      res.status(401).send({ message: error.message });
    }
  })

module.exports = routes;