import './App.css';
import { About, Footer, Header, Skills, Testimonials, Work } from './container';
import { Navbar } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App;
