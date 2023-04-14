import React from 'react';
import node from '../../../img/icons/node-js.png';
import javascript from '../../../img/icons/javascript.png';
import mongoDb from '../../../img/icons/mongodb.png';
import react from '../../../img/icons/react.png';
import ruby from '../../../img/icons/ruby.png';
import html from '../../../img/icons/html.png';
import css from '../../../img/icons/css.png';
import mysql from '../../../img/icons/mysql.png';
import git from '../../../img/icons/git.png';
import bootstrap from '../../../img/icons/bootstrap.png';
import cplusplus from '../../../img/icons/c.png';
import './skills.css';

import {CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Skills(){
  const japanese = 100;
  const english = 90;
  const spanish = 70;
  const portuguese = 30;

  return (
    <section id="skills">
      <h5 className="contact_title">Technics that I know</h5>
      <h5 className="contact_message" >Skills</h5>
      <div id="cards_footer">
        <div className="card_footer skills">
          <h4>Skills</h4>
          <div className="card_line">
            <img className="icon" alt="" src={node}></img>
            <img className="icon" alt="" src={javascript}></img>
            <img className="icon" alt="" src={react}></img>
            <img className="icon" alt="" src={ruby}></img>
          </div>
          <div className="card_line">
            <img className="icon" alt="" src={cplusplus}></img>
            <img className="icon" alt="" src={mongoDb}></img>
            <img className="icon" alt="" src={html}></img>
          </div>
          <div className="card_line">
            <img className="icon" alt="" src={css}></img>
            <img className="icon" alt="" src={mysql}></img>
          </div>
          <div className="card_line">
            <img className="icon" alt="" src={git}></img>
            <img className="icon" alt="" src={bootstrap}></img>
          </div>
        </div>

        <div className="card_footer">
          <h4>Language</h4>
          <div className="language_skill language">
          <h4>Japanese</h4>
          <div className="progressbar" style={{ width: 70 }}>
            <CircularProgressbar value={japanese} text={`${japanese}%`} styles={buildStyles({
            // Colors
            pathColor: `rgba(79,255,176, ${japanese / 100})`,
            textColor: '#4FFFB0',
            trailColor: 'rgb(159, 156, 156)',
            // backgroundColor: '#4FFFB0',
          })}/>
          </div>
        </div>
        <div className="language_skill">
          <h4>English</h4>
          <div className="progressbar" style={{ width: 70 }}>
            <CircularProgressbar value={english} text={`${english}%`} styles={buildStyles({
            // Colors
            pathColor: `rgba(79,255,176, ${english / 100})`,
            textColor: '#4FFFB0',
            trailColor: 'rgb(159, 156, 156)',
            // backgroundColor: '#4FFFB0',
          })}/>
          </div>
        </div>
        <div className="language_skill">
          <h4>Spanish</h4>
          <div className="progressbar" style={{ width: 60 }}>
            <CircularProgressbar value={spanish} text={`${spanish}%`} styles={buildStyles({
            // Colors
            pathColor: `rgba(79,255,176, ${spanish / 100})`,
            textColor: '#4FFFB0',
            trailColor: 'rgb(159, 156, 156)',
            // backgroundColor: '#4FFFB0',
          })}/>
          </div>
        </div>
        <div className="language_skill">
          <h4>Portuguese</h4>
          <div className="progressbar" style={{ width: 60 }}>
            <CircularProgressbar value={portuguese} text={`${portuguese}%`} styles={buildStyles({
            pathColor: `rgba(79,255,176, ${portuguese / 100})`,
            textColor: '#4FFFB0',
            trailColor: 'rgb(159, 156, 156)',
            // backgroundColor: '#4FFFB0',
          })}/>
          </div>
        </div>
      </div>
      <div className="card_footer">
        <h4>Links</h4>
      </div>
    </div>
  </section>
  )
}

export default Skills;
