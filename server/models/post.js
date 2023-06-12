
const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  text: { type: String, required: true},
  date: { type: Date, required: true},
  location: {type: String, required: true},
  userid:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
    autopopulate: true
    }
});

const Posts = mongoose.model('Post', postSchema);
let count=0;
async function create(userid, text, location) {
  const newPost = await Posts.create({
    userid: userid,
    text: text,
    date: new Date().toISOString(),
    location: location
  });
  return newPost;
}

async function update( id, userid, text) {
  const post = await Posts.findById({ "_id": id });
  if(!post) throw Error("Post is not available");
  const filter={"_id":id};
  const update={
        text : text,
        date: new Date().toISOString(),
        userid: userid
    }
  const updates = await Posts.findOneAndUpdate(filter,update);
  return updates;
}

async function read(id,userid) {
  const post = await Posts.findById({ "_id": id });
  if(!post) throw Error("Post is not available");
  if(Posts.userid!=userid)
  {
    count++;
  }
  return post;
}

async function deletes(id, userid){
  if(Posts.userid!=userid) throw Error ("This user cannot delete the post");
  const remove= await Posts.findByIdAndDelete({"_id": id});
  if(!remove) throw Error("Post is not available");
  return remove;
};

module.exports = { 
  create, update, read, deletes
};