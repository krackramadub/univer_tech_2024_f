import logo from './logo.svg';
import './App.css';
import { PageLayout } from './compontents/Layout/Layout';
import { useEffect, useState } from 'react';

import { Routes, Route, useParams, useLocation } from 'react-router-dom'

function App() {


  const [posts, setPosts] = useState([])


  useEffect(() => {

    getPosts()
  }, [])

  const getPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => setPosts(res))
  }


  const user = {
    name: 'Ivan',
    age: '28',
    role: 'admin'
  }
  const isAdmin = (element) => (user.role == 'admin' ? element : <PageError />)
  const isAuth = (element) => (user.role == 'admin' ? element : <PageError />)
  return (

    <Routes>
      <Route path='/*' element={isAdmin(<PageLayout />)} >
        <Route index element={<HomeCompnonent posts={posts} />} />
        <Route path='info' element={<InfoPage />} />
        <Route path='user' element={<>user</>} />
        <Route path='*' />
      </Route>

      <Route path='/auth/'  >
        <Route index element={<HomeCompnonent posts={posts} />} />
        <Route path='login' element={<InfoPage />} />
        <Route path='resetpassword' element={<>user</>} />
      </Route>

      <Route path='/error/' element={<PageLayout />} >
        <Route index element={<>У вас нет роли администратора</>} />
      </Route>

    </Routes>
  );
}

export default App;


const HomeCompnonent = ({ posts }) => {

  const params = useParams()
  const location = useLocation()
  console.log("🚀 ~ HomeCompnonent ~ location:", location)

  console.log("🚀 ~ HomeCompnonent ~ params:", params)
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      width: '64em',
      margin: '0 auto',
      marginTop: '20px'
    }}>
      {posts.map((post, index) => <PostComponent postData={post} />)}
    </div>
  )
}

const PostComponent = ({ postData }) => {
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

const InfoPage = () => {
  const location = useLocation()

  // const { tel } = location.state
  // console.log("🚀 ~ InpoPage ~ location:", location)
  return (
    <>
      info
    </>
  )
}

const PageError = () => {
  return (
    <>У вас нет роли администратора</>
  )
}