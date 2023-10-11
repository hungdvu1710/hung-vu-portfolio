import './App.scss';
import { About, Header, Skills, Projects, Certifications } from './container';
import { Navbar } from './components';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Certifications />
    </div>
  )
}

export default App;
