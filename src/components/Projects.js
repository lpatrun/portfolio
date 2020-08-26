import React from 'react';
import './Projects.css';

import governor from '../images/governorMock.jpg'
import heros from '../images/herosMock.jpg'
import kenaz from '../images/kenazMock.jpg'
import portfolio from '../images/portfolioMock.jpg'
import filmoteka from '../images/filmotekaMock.jpg'

function Projects() {
  return (
    <section className="proj-bckgr">

      <div className="projects">

        <div className="projects-title">
          <h3>Projects</h3>
        </div>

        <div className="project-container">
          <div className="project-image">
            <img src={governor} alt="Govrenor" />
          </div>

          <div className="project-bullets angular-background">
            <div>
              <h3 className="heading-tertiary">Who's Your Governor?</h3>
              <ul>
                <li>Angular 6+</li>
                <li>Angular Material</li>
                <li>Internationalisation (ngx)</li>
                <li>Use of pipes</li>
                <li>For Laptop and smartphone</li>
              </ul>
            </div>
            <div className="btnCont">
              <a href="https://github.com/lpatrun/whosYourGovernor" target="blank"><button className="btn-code"><p>CODE</p></button></a>
              <a href="https://lpatrun.github.io/whosYourGovernor" target="blank"><button className="btn-live"><p>LIVE</p></button></a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div className="project-image">
            <img src={portfolio} alt="Portfolio" />
          </div>

          <div className="project-bullets react-background">
            <div>
            <h3 className="heading-tertiary">Portoflio project</h3>
            <ul>
              <li>React</li>
              <li>React hooks</li>
              <li>*work in progress</li>
            </ul>
            </div>
            <div className="btnCont">
              <a href="https://github.com/lpatrun/portfolio" target="blank"><button className="btn-code"><p>CODE</p></button></a>
              <a href="https://lpatrun.github.io/portfolio" target="blank"><button className="btn-live"><p>LIVE</p></button></a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div className="project-image">
            <img src={kenaz} alt="Kenaz" />
          </div>

          <div className="project-bullets vue-background">
            <div>
              <h3 className="heading-tertiary">Kenaz - news portal</h3>
              <ul>
                <li>Vue</li>
                <li>Vuex</li>
                <li>Vue router</li>
                <li>Vue resource</li>
                <li>Internationalisation</li>
                <li>SASS</li>
                <li>*works only locally</li>
              </ul>
            </div>
            <div className="btnCont">
              <a href="https://github.com/lpatrun/kenaz" target="blank"><button className="btn-code"><p>CODE</p></button></a>
              <a href="https://lpatrun.github.io/kenaz" target="blank"><button className="btn-live"><p>LIVE</p></button></a>
            </div>
          </div>
        </div>

        <div className="project-container">
          <div className="project-image">
            <img src={heros} alt="Heros fight" />
          </div>

          <div className="project-bullets angular-background">
            <div>
              <h3 className="heading-tertiary">Heros fight</h3>
              <ul>
                <li>Angular 10</li>
                <li>Child routes</li>
                <li>API consumption</li>
                <li>Services</li>
                <li>Use of pipes</li>
                <li>*mobile - TBD</li>
              </ul>
            </div>
            <div className="btnCont">
              <a href="https://github.com/lpatrun/fightClub" target="blank"><button className="btn-code"><p>CODE</p></button></a>
              <a href="https://lpatrun.github.io/fightClub" target="blank"><button className="btn-live"><p>LIVE</p></button></a>
            </div>
          </div>

        </div>

        <div className="project-container">
          <div className="project-image">
            <img src={filmoteka} alt="Video Library" />
          </div>

          <div className="project-bullets vue-background">
            <div>
              <h3 className="heading-tertiary">Video library</h3>
              <ul>
                <li>Vue.js</li>
                <li>REST API consumption</li>
                <li>TMDb API</li>
                <li>Vuex</li>
                <li>Vue resource</li>
                <li>Responsive</li>
              </ul>
            </div>
            <div className="btnCont">
              <a href="https://github.com/lpatrun/moviesVueJs" target="blank"><button className="btn-code"><p>CODE</p></button></a>
              <a href="https://lpatrun.github.io/moviesVueJs" target="blank"><button className="btn-live"><p>LIVE</p></button></a>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Projects;