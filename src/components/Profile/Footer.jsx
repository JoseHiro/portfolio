import React from 'react';
import node from '../../img/icons/node-js.png';
import javascript from '../../img/icons/javascript.png';
import mongoDb from '../../img/icons/mongodb.png';
import react from '../../img/icons/react.png';
import ruby from '../../img/icons/ruby.png';
import html from '../../img/icons/html.png';
import css from '../../img/icons/css.png';
import mysql from '../../img/icons/mysql.png';
import git from '../../img/icons/git.png';
import bootstrap from '../../img/icons/bootstrap.png';
import cplusplus from '../../img/icons/c.png';

import {CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


function Skills(){
  const percentage = 66;

  return <div id="profile-footer">
    <section id="cards-footer">
      <div className="card-footer skills">
      <h4>Skills</h4>
        <div className="card-line">
          <img className="icon" alt="" src={node}></img>
          <img className="icon" alt="" src={javascript}></img>
          <img className="icon" alt="" src={react}></img>
          <img className="icon" alt="" src={ruby}></img>
        </div>
        <div className="card-line">
          <img className="icon" alt="" src={cplusplus}></img>
          <img className="icon" alt="" src={mongoDb}></img>
          <img className="icon" alt="" src={html}></img>
        </div>
        <div className="card-line">
          <img className="icon" alt="" src={css}></img>
          <img className="icon" alt="" src={mysql}></img>
        </div>
        <div className="card-line">
          <img className="icon" alt="" src={git}></img>
          <img className="icon" alt="" src={bootstrap}></img>
        </div>
      </div>

      <div className="card-footer">
      <h4>Language</h4>
       <div className="language-skill language">
        <h4>Japanese</h4>
        <div className="progressbar" style={{ width: 70 }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
          // Colors
          pathColor: `rgba(79,255,176, ${percentage / 100})`,
          textColor: '#4FFFB0',
          trailColor: 'rgb(159, 156, 156)',
          // backgroundColor: '#4FFFB0',
        })}/>
        </div>
       </div>
       <div className="language-skill">
        <h4>English</h4>
        <div className="progressbar" style={{ width: 70 }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
          // Colors
          pathColor: `rgba(79,255,176, ${percentage / 100})`,
          textColor: '#4FFFB0',
          trailColor: 'rgb(159, 156, 156)',
          // backgroundColor: '#4FFFB0',
        })}/>
        </div>
       </div>
       <div className="language-skill">
        <h4>Spanish</h4>
        <div className="progressbar" style={{ width: 60 }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
          // Colors
          pathColor: `rgba(79,255,176, ${percentage / 100})`,
          textColor: '#4FFFB0',
          trailColor: 'rgb(159, 156, 156)',
          // backgroundColor: '#4FFFB0',
        })}/>
        </div>
       </div>
       <div className="language-skill">
        <h4>Portuguese</h4>
        <div className="progressbar" style={{ width: 60 }}>
          <CircularProgressbar value={percentage} text={`${percentage}%`} styles={buildStyles({
          // pathTransition:
          //       percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s",
          // Colors
          pathColor: `rgba(79,255,176, ${percentage / 100})`,
          textColor: '#4FFFB0',
          trailColor: 'rgb(159, 156, 156)',
          // backgroundColor: '#4FFFB0',
        })}/>
        </div>
       </div>
      </div>

      <div className="card-footer">
        <h4>Links</h4>
      </div>
    </section>
  </div>
}

export default Skills;
