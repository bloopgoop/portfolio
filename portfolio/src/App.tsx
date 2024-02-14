import Intro from './components/intro'
import Sidenav from './components/sidenav'
import About from './components/about'
import Project from './components/projects'
import Contact from './components/contact'
import './App.css'

function App() {

  return (
    <>
      <Sidenav />
      <Intro />
      <About />
      <Project />
      <Contact />
    </>
  )
}

export default App
