import React from 'react';
import { FaBook, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';
import "./about.css";
import myImage from '../images/myImage.jpg';

export default function About() {
  return (
    <div className="frame" style={{ backgroundColor: '#C3D1CE' }}>
      <div className="frame-wrapper">
        <div className="div">
          <div className="section">
            <div className="div-container">
              <header className="header">
                <div className="heading-about-us">About Us</div>
              </header>
              <div className="div-row">
                <div className="div-col-lg">
                  <div className="p-hd-e">
                    <p className="a-child-centered">
                      A child-centered, nurturing environment designed to spark curiosity and
                      <br />
                      inspire a lifelong love of learning. Students learn by asking questions,
                      <br />
                      having conversations, and developing the skills to genuinely listen to the
                      <br />
                      ideas of others.
                    </p>
                  </div>
                  <div className="div-icon-box">
                    <div className="icon"><FaBook /></div>
                    <div className="heading-CURRICULUM">CURRICULUM</div>
                    <div className="p-description">
                      <p className="text-wrapper-2">
                        Built on solid research and guided by top educators from prestigious schools, our institution
                        offers chances to ignite a lifelong love for learning.
                      </p>
                    </div>
                  </div>
                  <div className="div-icon-box-2">
                    <div className="icon"><FaChalkboardTeacher /></div>
                    <div className="heading-PROGRAMS">PROGRAMS</div>
                    <div className="p-description">
                      <p className="text-wrapper-2">
                        Crafting an exceptional learning journey for each student, offering daily chances to learn and
                        discover.
                      </p>
                    </div>
                  </div>
                  <div className="div-icon-box-3">
                    <div className="icon"><FaCalendarAlt /></div>
                    <div className="heading-SCHEDULE">SCHEDULE</div>
                    <div className="p-description">
                      <p className="text-wrapper-2">
                        We adapt to your school's schedule, concentrate more on studying before tests, and consider
                        your timetable when making lesson plans.
                      </p>
                    </div>
                  </div>
                </div>
                <img
                  className="portrait-teacher"
                  alt="myImage"
                  src={myImage}
                  style={{ 
                    width: '20%', 
                    height: '150%',
                    margin: '100px 100px', 
                    marginTop: '-400px',
                    marginBottom: '150px', 
                    marginLeft: '800px',
                    transition: 'transform 0.3s',
                    borderRadius: '20px',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
