import './styles/index.scss';
import Navbar from './components/Navbar';
import { Contact, Footer, Hero, Skills, Projects } from './containers';

function App() {
  return (
    <main className="website">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
