import { HashRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Artwork from './pages/Artwork'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="artwork" element={<Artwork />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
