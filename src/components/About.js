import React, { Component } from 'react';
import './About.css';
import { connect } from 'react-redux';

import profilepic from '../images/profilepic.jpg'

class About extends Component {
  render() {

    const aboutMeBlock = this.props.about.map((element) => (
      <div className={element.classes} key={element.id}>
        <div className="infoBlock__text">
          <p>{element.quote}</p>
        </div>
      </div>
    ));

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
            {aboutMeBlock}
            <a href="https://www.dropbox.com/s/8nnaw6yas16woxq/CV_Patrun.pdf?dl=0" target="blank">
              <button className="cv-btn"><p>my cv</p></button>
            </a>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    about: state.aboutMe
  }
}

export default connect(mapStateToProps)(About);

// <a href='https://www.freepik.com/vectors/background'>Background vector created by starline - www.freepik.com</a>
// <a href='https://www.freepik.com/vectors/background'>Background vector created by pikisuperstar - www.freepik.com</a>
// <a href='https://www.freepik.com/vectors/technology'>Technology vector created by kjpargeter - www.freepik.com</a>