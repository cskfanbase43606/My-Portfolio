import React, { Component } from 'react';
import classes from './Education.module.css';
// import ScrollAnimation from 'react-animate-on-scroll';
import 'animate.css/animate.min.css';
import { MdSchool } from 'react-icons/md';
import { MdWork } from 'react-icons/md';
import { FaSchool } from 'react-icons/fa';

class Education extends Component {
  render() {
    return (
      <div className={classes.box} id='education'>
        {/* <ScrollAnimation
          offset={0}
          animateIn='fadeInLeft'
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        > */}
        <span className={classes.head}>MY JOURNEY</span>
        <section className={classes.container}>
          <div>
            <div className={classes.row}>
              <div className={classes.row_md_12}>
                <div className={classes.timeline_centered}>
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                   
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={classes.timeline_icon}>
                      <MdSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Undergraduation from  MIT,Manipal <span>2017-2021</span>
                      </h2>
                      <div className={classes.description}>
                        I have completed my undergraduation in IE (Industial Engineering)
                        from <a href='http://sliet.ac.in/'>MIT(Manipal)</a> with overall 82.71%.
                      </div >
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article className={classes.timeline_entry}>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}>
                      <FaSchool />
                    </div>
                    <div className={classes.label}>
                      <h2>
                        Higher Education <span>2014-2016</span>
                      </h2>
                      <div className={classes.description}>
                        I have completed my higher education from HKIS with major subjects as
                        Physics,Chemistry & Maths with 85% merit in CBSE board.{' '}
                      </div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}

                  {/* <ScrollAnimation
                      offset={0}
                      animateIn='fadeInLeft'
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    > */}
                  <article>
                    <div className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}>
                      <MdWork />
                    </div>
                    <div className={classes.label}>
                      <h2>Internship</h2>
                      <div className={classes.description}>Completed one month Internship in React Js with Internity Foundation</div>
                    </div>
                    <div className={classes.timeline_entry_inner}>
                      <div className={classes.timeline_icon_3 || classes.color_none}></div>
                    </div>
                  </article>
                  {/* </ScrollAnimation> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* </ScrollAnimation> */}
      </div>
    );
  }
}

export default Education;
