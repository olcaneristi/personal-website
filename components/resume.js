import Html from '../langs/Html'
import Css from '../langs/Css'
import Javascript from '../langs/Javascript'
import Reacticon from '../langs/Reacticon'

function Resume() {
  return (
    <section id="resume" className="contain">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>🎓Education</span>{' '}
          </h1>
        </div>
        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">
              <h3>Management Information Systems</h3>
              <p className="info">
                Akdeniz University
                <span>
                  , <i>2017-Present | 3.40/4</i>
                </span>
              </p>
              <p>
                {' '}
                MIS is a people-oriented field with an emphasis on service
                through technology. A misconception is that MIS only concerns
                writing code.{' '}
                </p>
				<p>
                  I learned basic OOP, C, C#. Actually I learned more than
                  coding and I love it.
                
              </p>
            </div>
          </div>
          <div className="row item2">
            <div className="twelve columns">
              <h3>Web Programming</h3>
              <p className="info">
                Tekirdag Zubeyde Hanim Anatolian Vocational High School
                <span>
                  , <i>2012-2016 | 84/100</i>
                </span>
              </p>
              <p>
                {' '}
                I learned HTML, CSS, Javascript, Asp.Net, PHP, SQL and made
                basic projects. Also I learned Adobe Flash, Dreamweaver,
                Photoshop programs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row skills">
        <div className="three columns header-col">
          <h1>
            {' '}
            <span>🏆Skills</span>{' '}
          </h1>
        </div>
        <div className="nine columns main-col">
          <ul>
            <li>
              <a>
                <Html />
              </a>
            </li>
            <li>
              <a>
                <Css />
              </a>
            </li>
            <li>
              <a>
                <Javascript />
              </a>
            </li>
            <li>
              <a>
                <Reacticon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Resume