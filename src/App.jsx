import './App.css'
import {Route,Routes} from 'react-router-dom'
import Navbar from "./components/Navbar.jsx"
import Bglanding from "./components/Bglanding.jsx"
import Mainlanding from './components/Mainlanding.jsx'
import About from './components/About.jsx'
import Bgabout from './components/Bgabout.jsx'
import Chatbot from './components/Chatbot.jsx'
import Contributers from './components/Contributors.jsx'

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <Routes>
          <Route path="/" element={
            <>
              <Bglanding></Bglanding>
              <Mainlanding></Mainlanding>
            </>}></Route>
            <Route path='/About' element={
              <>
                <About></About>
                <Bgabout></Bgabout>
              </>}></Route>
              <Route path='/Chatbot' element={
              <>
                <Chatbot></Chatbot>
              </>}></Route>
              <Route path='/Contributors' element={
              <>
                <Contributers></Contributers>
              </>}></Route>
      </Routes>
      
      
    </>
  )
}

export default App
