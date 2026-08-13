import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './CreatePost/CreatePost'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<h1>Hello World</h1>} />
        <Route path='/about' element={<h1>About us</h1>} />
        <Route path='/create-post' element={<CreatePost/>} />
      </Routes>
    </Router>
  )
}

export default App
