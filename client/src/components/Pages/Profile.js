import React, { useContext, useState } from 'react';
import {UserContext} from '../Pages/UserContext.js'; 

const Profile = () => {
  const { user } = useContext(UserContext); 
  const [posts, setPosts] = useState([]); 
  const [newPost, setNewPost] = useState(''); 
  
  const handlePostSubmit = (e) => {
    e.preventDefault();

    const post = {
      id: posts.length + 1, 
      content: newPost,
    };

    
    setPosts([...posts, post]);

    setNewPost('');
  };

  return (
    <div>
      <h1>Welcome, {user.userid}!</h1>

      <h2>Your Posts:</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
      )}

      <h2>Create a New Post:</h2>
      <form onSubmit={handlePostSubmit}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Enter your post"
          required
        ></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Profile;
