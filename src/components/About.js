import React from 'react';
import './About.css';

import profilepic from '../images/profilepic.jpg'

function About() {
  return (
    <section className="aboutMe">
      <div className="center-text">
        <h2 className="heading-secondary">ABOUT ME</h2>
      </div>
      <div className="information">
        <div>
          <img src={profilepic} alt="Profile pic" className="myImg" />
        </div>
        <div className="myInfo">
          <div className="infoBlock block--1">
            <div className="infoBlock__text">
              <p>Master's and bachelor's degree in electrical engineering.</p>
            </div>
          </div>
          <div className="infoBlock block--2">
            <div className="infoBlock__text">
              <p>Edunova web course, multiple Udemy courses including: JS, CSS, Vue, Angular and React.
                Factory we academy</p>
            </div>
          </div>
          <div className="infoBlock block--3">
            <div className="infoBlock__text">
              <p>Good food lover, vine lover, F1 fanatic, Mensa member and much more :)</p>
            </div>
          </div>
          <a href="https://www.dropbox.com/s/8nnaw6yas16woxq/CV_Patrun.pdf?dl=0" target="blank">
            <button className="cv-btn"><p>my cv</p></button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;

// <a href='https://www.freepik.com/vectors/background'>Background vector created by starline - www.freepik.com</a>
// <a href='https://www.freepik.com/vectors/background'>Background vector created by pikisuperstar - www.freepik.com</a>
// <a href='https://www.freepik.com/vectors/technology'>Technology vector created by kjpargeter - www.freepik.com</a>