import './App.css';
import Header from './components/Header/Header';
import About from './components/UI/About';
import Blog from './components/UI/Blog';
import Counter from './components/UI/Counter';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Team from './components/UI/Team';
import Testimonial from './components/UI/Testimonial';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Counter />
      <Services />
      <About />
      <Team />
      <Blog />
      <Testimonial />
    </>
  )
}

export default App;
