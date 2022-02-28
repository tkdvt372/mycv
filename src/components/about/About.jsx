import React from 'react';
import './about.css';
import ME from '../../assets/avatar2.png';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image" />
          </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                  <FaAward className="about__icon" />
                  <h5>Experience</h5>
                  <small>3+ years Working</small>
              </article>

              <article className="about__card">
                  <FiUsers className="about__icon" />
                  <h5>Client</h5>
                  <small>500+ Worldwide</small>
              </article>

              <article className="about__card">
                  <VscFolderLibrary className="about__icon" />
                  <h5>Projects</h5>
                  <small>80+ Completed</small>
              </article>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias consectetur rerum tenetur molestiae aperiam natus adipisci iste 
            voluptates, optio possimus recusandae illum maiores corrupti aliquam in, cumque rem odit odio, numquam facere officia dolorum minima
            laborum! Assumenda consequuntur laudantium minus!</p>

            <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About