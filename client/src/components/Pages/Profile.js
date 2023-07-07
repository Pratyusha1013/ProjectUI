import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../Pages/UserContext.js';
import { fetchData } from '../../main.js';
import { Link } from 'react-router-dom';

const Profile = () => {
  const { user } = useContext(UserContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData('/post/Read', { userid: user.userid }, 'POST')
      .then((data) => {
        
        setPosts(data);

      })
      .catch((error) => {
        console.log(error);
      });
  }, [user.userid]);

  return (
    <div>
      <h1>Welcome, {user.userid}!</h1>

      <h2>Your Posts:</h2>
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.text}</li>
          ))}
        </ul>
      )}

      <h2>Create a New Post</h2>
      <Link to="/Post">Create a new post.</Link>
    </div>
  );
};

export default Profile;
