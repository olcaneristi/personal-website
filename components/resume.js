import Html from './icons/Html'
import Css from './icons/Css'
import Javascript from './icons/Javascript'
import Reacticon from './icons/Reacticon'

function Resume() {
  return (
    <section id="resume" className="contain">
      <div className="row education">
        <div className="title1">
          <h1>
            <span>🎓Education</span>{' '}
          </h1>
        </div>
        <div className="main-col">
          <div className="edudesc">
            <div className="headtitle">
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
          <div className="edudesc2">
            <div className="headtitle">
              <h3>Web Programming</h3>
              <p className="info">
                Tekirdag Zubeyde Hanim Anatolian Vocational High School
                <span>
                  , <i>2012-2016 | 84/100</i>
                </span>
              </p>
              <p>
                {' '}
                I learned HTML, CSS, JavaScript, Asp.Net, PHP, SQL and made
                basic projects. Also I learned Adobe Flash, Dreamweaver,
                Photoshop programs.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row skills">
        <div className="title1">
          <h1>
            {' '}
            <span>🏆Skills</span>{' '}
          </h1>
        </div>
        <div className="main-col">
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
      <div className="row cv">
        <div className="title1">
          <h1> 
            <span>📝Resume</span>
          </h1>
          </div>
          <div className="main-col">
          <a href="//drive.google.com/file/d/17y7NzuR-ggMlvrmzrNdaXG3ILBxyNTIS/view"
          target="_blank">
          <button className="button2">
            <span>View my Resume 📍</span>
          </button>
          </a>
          </div>
      </div>
    </section>
  )
}

export default Resume
