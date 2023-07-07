const mongoose = require("mongoose");
const { Users } = require("./user");

const postSchema = new mongoose.Schema({
  text: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  userid: {
    type: String,
    ref: "User",
    required: false,
    autopopulate: true,
  },
});

const Posts = mongoose.model("Post", postSchema);


async function create(userid, text, location) {
  const newPost = await Posts.create({
    userid: userid,
    text: text,
    date: new Date().toISOString(),
    location: location,
  });
  return newPost;
}

async function update(id, userid, text) {
  const user = await Users.findOne({ userid: userid });
  if (!user) throw Error("User Does not Exist");

  const post = await Posts.findById(id);
  if (!post) throw Error("Post is not available");
  if (post.userid !== userid) throw Error("This user cannot update the post");

  post.text = text;
  post.date = new Date().toISOString();
  const updatedPost = await post.save();
  return updatedPost;
}

async function read(userid) {
  const user = await Users.findOne({ userid: userid });
  if (!user) throw Error("User Does not Exist");

  try {
    const posts = await Posts.find({ userid });
    return posts;
  } 
  catch (error) {
    
    console.error('Error retrieving posts:', error);
    throw error;
  }
}


async function deletes(id, userid) {
  const user = await Users.findOne({ userid: userid });
  if (!user) throw Error("User Does not Exist");

  const post = await Posts.findById(id);
  if (!post) throw Error("Post is not available");
  if (post.userid !== userid) throw Error("This user cannot delete the post");

  const removedPost = await Posts.findByIdAndDelete(id);
  return removedPost;
}

module.exports = {
  create,
  update,
  read,
  deletes,
};
