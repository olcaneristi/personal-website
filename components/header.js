import Scrollchor from 'react-scrollchor'

function Header() {
  return (
    <header>
      <nav>
        <ul>

          <li>
            <Scrollchor to="about">About</Scrollchor>
          </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header