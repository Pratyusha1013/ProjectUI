import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../Pages/UserContext.js';
import { fetchData } from '../../main.js';
import { useNavigate } from 'react-router-dom';

const PostForm = () => {
  const today = new Date().toISOString().substr(0, 10);
  const[userid,setUserId]=useState('');
  const [date, setDate] = useState(today);
  const [text, setText] = useState('');
  const [location, setLocation] = useState('');
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation(`${latitude}, ${longitude}`);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPost = {
      userid,
      date,
      text,
      location,
    };

    const userProfile = user.profile || { posts: [] };
    const updatedProfile = {
      ...userProfile,
      posts: [...userProfile.posts, newPost],
    };

    updateUser('profile', updatedProfile);
    setUserId(user.userid);
    setDate(today);
    setText('');
    setLocation('');

    try {
      const data = {
        userid: user.userid,
        text: text,
        date: new Date().toISOString(),
        location: location,
      };

      const response = await fetchData('/post/Create', data, 'POST');

      if (!response.message) {
        console.log(newPost);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        UserID:
        <input type="userid" value={userid} onChange={(e) => setUserId(e.target.value)} />
      </label>
      <br />
      <label>
        Date:
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </label>
      <br />
      <label>
        Text:
        <textarea value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
