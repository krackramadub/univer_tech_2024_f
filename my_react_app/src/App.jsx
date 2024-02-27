import logo from './logo.svg';
import './App.css';
import { Layout } from './compontents/Layout/Layout';
import { useState } from 'react';

function App() {


  const [posts , setPosts] = useState([])

  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(res => setPosts(res) )


  return (
    <Layout >
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '8px',
      }}>
        {posts.map((post, index) => <PostComponent postData={post} />)}
      </div>
    </Layout>
  );
}

export default App;


const PostComponent = ({ postData}) => {
  return (
    <div style={{
      border: '1px solid #333',
      padding: '12px',
      borderRadius: '8px'
    }}>
      <p>{postData.userId}</p>
      <p>{postData.title}</p>
      <p>{postData.body}</p>
    </div>
  )
}