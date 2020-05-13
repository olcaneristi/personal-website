import Link from 'next/link'
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
            <Link href="//twitter.com/ogulcaanX">
              <a target="_blank">
                <Twitter />
              </a>
            </Link>
          </li>
          <li>
            <Link href="//github.com/olcaneristi">
              <a target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </Link>
          </li>
          <li>
            <Link href="//linkedin.com/in/ogulcaneristi/">
              <a target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </Link>
          </li>
          <li>
            <Link href="//medium.com/@olcaneristi">
              <a target="_blank" rel="noopener noreferrer">
                <Medium />
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      <p>
        Made with Nextjs.{' '}
        <Link href={'//github.com/olcaneristi/website-next'} prefetch={false}>
          <a target="_blank" rel="noopener noreferrer">
          Click
          </a>
        </Link>{' '}
        for source codes.
      </p>
    </section>
  )
}

export default Footer