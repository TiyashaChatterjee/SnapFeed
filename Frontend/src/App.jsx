import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import CreatePost from './CreatePost/CreatePost'
import Feed from './CreatePost/Feed'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-post' element={<CreatePost/>} />
        <Route path='/feed' element={<Feed/>} />
      </Routes>
    </Router>
  )
}

export default App
