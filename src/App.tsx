import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Routes, Route} from 'react-router-dom'
import {PostCreator} from './pages/PostCreator'

function App() {
  return (
    <>
      <Navbar /> 
      <div className="container pt-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/post-creator' element={<PostCreator />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
