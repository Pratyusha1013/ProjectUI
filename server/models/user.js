
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: { type: String, unique: true, required: true},
  password: { type: String, required: true},
  email: {type: String, required: true},
  gender:{type: String, required: false},
  dateofbirth:{type: Date, required: true}
})

const Users = mongoose.model('User', userSchema);

async function register(userid, password, email, dateofbirth){
  const user = await Users.findOne({ "userid": userid});
  if(user) throw Error('User Exist ');
  const newuser = await Users.create({
    userid: userid,
    password: password,
    email: email,
    dateofbirth: dateofbirth
  });
  return newuser;
}

async function login(userid, password){
  const user = await Users.findOne({ "userid": userid});
  if(!user) throw Error('User Doesnot Exist');
  if(user.password != password) throw Error('Password is Incorrect');
  return user;
}

async function updatepassword(id, password) {
  const user = await Users.updateOne({"_id":id}, {$set: { password: password}});
  return user;
}

async function deleteuser(id) {
  await Users.deleteOne({"_id":id});
};

module.exports = { 
  register, login, updatepassword, deleteuser 
};