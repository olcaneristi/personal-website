import Link from 'next/Link'
import Github from './icons/Github'
import Linkedin from './icons/Linkedin'
import Medium from './icons/Medium'
import Twitter from './icons/Twitter'

function Footer() {
  return (
    <section id="footer" className="contain">
      <nav>
        <ul>
          <li>
            <Link href="//twitter.com/olcaanersti">
              <a target="_blank">
                <Twitter />
              </a>
            </Link>
          </li>
          <li>
            <Link href="//github.com/olcaneristi">
              <a target="_blank">
                <Github />
              </a>
            </Link>
          </li>
          <li>
            <Link href="//linkedin.com/in/ogulcaneristi/">
              <a target="_blank">
                <Linkedin />
              </a>
            </Link>
          </li>
          <li>
            <Link href="//medium.com/olcanblog">
              <a target="_blank">
                <Medium />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        Made with Nextjs.{' '}
        <a href="//github.com/olcaneristi" target="_blank">
          Click
        </a>{' '}
        for source codes.
      </p>
    </section>
  )
}

export default Footer