import About from '../components/about'
import Contact from '../components/contact'
import Resume from '../components/resume'
import Header from '../components/header'
import Footer from '../components/footer'
import Home from '../components/home'

export default () => (
  <div className="app">
    <Header/>
    <Home/>
    <About/>
    <Resume/>
    <Contact/>
    <Footer/>
  </div>
)
