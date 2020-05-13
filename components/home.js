import Link from 'next/link'
import React, { Component } from 'react'
import Typist from 'react-typist'
import Github from './icons/Github'
import Linkedin from './icons/Linkedin'
import Medium from './icons/Medium'
import Twitter from './icons/Twitter'

class Home extends Component {
    render() {
      return (
        <section id="home" className="contain">
          <div className="typistexample">
            <Typist
              className="message"
              startDelay={300}
              avgTypingDelay={95}
            >
              Hey there! ✋
              <Typist.Delay ms={1250} />
              <br />
              I'm Ogulcan Eristi.
              <Typist.Delay ms={1250} />
              <br />
              I'm a Frontend
              <Typist.Backspace count={8} delay={150} />
              Jr. Frontend Developer.
            </Typist>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="//twitter.com/ogulcaanX">
                  <a target="_blank" rel="noopener noreferrer">
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
        </section>
      )
    }
  }
  
  export default Home