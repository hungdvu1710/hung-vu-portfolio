import './App.scss';
import { About, Footer, Header, Skills, Testimonials, Projects } from './container';
import { Navbar } from './components';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App;
