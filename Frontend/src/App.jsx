import { Routes, Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost.jsx'
import Feed from "./pages/Feed.jsx"
function App() {
  return (
    <Routes>
      <Route path="/" element={<h1 className="bg-amber-700">Hello</h1>} />
      <Route path="/create-post" element={<CreatePost/>} />
      <Route path="/feed" element = {<Feed/>} />
      
    </Routes>
  )
}

export default App