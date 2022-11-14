import {Navbar} from './components/Navbar'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {RecordCreator} from './pages/RecordCreator'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar /> 
      <div className="container pt-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/record-creator' element={<RecordCreator />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App
