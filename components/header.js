import Scrollchor from 'react-scrollchor'
import ScrollTop from '../components/icons/ScrollTop'

function Header() {
  return (
    <header>
      <nav>
        <ul>
        <li>
            <Scrollchor to="home">Home</Scrollchor>
          </li>
          <li>
            <Scrollchor to="about">About</Scrollchor>
          </li>
          <li>
            <Scrollchor to="resume">Resume</Scrollchor>
          </li>
          <li>
            <Scrollchor to="contact">Contacts</Scrollchor>
          </li>
        </ul>
        <div id="ScrollToTop">
          <Scrollchor to="#">
            <a id="scrolltop"> 
              <ScrollTop/> 
            </a>
          </Scrollchor>
        </div>
      </nav>
    </header>
  )
}

export default Header