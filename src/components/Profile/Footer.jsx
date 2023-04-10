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


function Skills(){
  return <div id="profile-footer">
    <section id="cards-footer">
      <div className="card-footer skills">
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
      <div className="card-footer"></div>
      <div className="card-footer"></div>
    </section>
  </div>
}

export default Skills;
