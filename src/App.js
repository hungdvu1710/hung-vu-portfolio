import './App.scss';
import { About, Header, Skills, Projects } from './container';
import { Navbar } from './components';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
    </div>
  )
}

export default App;
