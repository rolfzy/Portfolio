import './assets/style/App.css'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Project'
import Skills from './Skill'


function App() {
  return (
    <div className="app">
      <Hero />
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
