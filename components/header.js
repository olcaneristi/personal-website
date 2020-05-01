import Scrollchor from 'react-scrollchor'

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
      </nav>
    </header>
  )
}

export default Header