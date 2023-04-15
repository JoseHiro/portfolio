import React, {useState} from 'react';
import LongButton from './Long-button';
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
import jquery from '../../../img/icons/jquery.png'
import npm from '../../../img/icons/npm.png'
import './history.css'

function Body(){

  const [buttonStatus, setStatus] = useState(0);

  const history = [
    { time: '2023 Spring -',
      text: "Commuted to Le wagon. Created apps like Seekr, Ventri and Caralibro. The bootcamp was amazing to experience team projectsto and to have an environment surrounded passionate students. I leanred planning, designing, developing, deploying and debugging.",
      icons: [node, javascript, jquery, mongoDb, react, html, css, bootstrap, git, npm]
    },
    { time: '2022 Fall -',
      text: "Commuted to Le wagon. Created apps like Seekr, Ventri and Caralibro. The bootcamp was amazing to experience team projectsto and to have an environment surrounded passionate students. I leanred planning, designing, developing, deploying and debugging.",
      icons: [ruby, node, javascript, mongoDb, mysql, html, css, git, npm ]
    },
    { time: '2022 Spring -',
      text: "I was investigating Bootcamps were I could accelerate my progress learning. At that time I was starting Ruby, Node.js, Mongo.js and MySQL but it felt like I was hitting a wall to make step forward. And finally I have decided to invest my time and money for a huge step!",
      icons: [node, javascript, jquery, mongoDb, react, html, css, bootstrap, npm, git]
    },
    { time: '2021 Fall -',
      text: "Officially enrolled for Computer Science degree. I took C++ class during the semester which gave me a different view in this programming world, since I have only learned Web development until then. This compiled language thought me a lot of staff, giving me a huge comparison with script language",
      icons: [cplusplus, javascript, html, css, bootstrap ]},
    { time: '2021 Spring -',
      text: "Started my journey to become a programmer! Used many platforms to undestand what programming is. I used website called Progate where you can learn the fundamenatals. At the HTML and CSS were the introduction to coding world, however it was quite neat to set some of your original design outputs on the screen. JavaScript was an anthore language to help me give some dinamism to my creation",
      icons: [javascript, html, css, ]}
  ]

  const longButtons = [ { id: 0 }, { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 },]

  function handleButtonState(id){
    setStatus(id);
  }

  return (
    <section id="history">
      <h5>Get to know me</h5>
      <h5 className="message">Career</h5>
      <div className='container history_container'>
        <div id="card_deck">
          <article className="body_card body_card1">
            <div className="card_detail_year">
              <h1>2+</h1>
              <h2>&nbsp;years</h2>
            </div>
            <h3>Junior Full Stack</h3>
          </article>
          <article className="container body_card">
            <h5>Education</h5>
            <div className="body_card_detail">
              <p>Le Wagon Web development Bootcamp Mexico</p>
              <p>Houston Community College Computer Science</p>
              <p>Rishho University Law</p>
            </div>
          </article>
          <article className="container body_card">
            <h5>Certificates</h5>
            <div className="body_card_detail">
              <p>Testing Ruby with RSpec: The Complete Guide</p>
              <p>Diploma de Español como Lengua Extranjera B2</p>
            </div>
          </article>
        </div>

        <article id="big_card">
          <nav className="long_buttons">
            {longButtons.map((data, index) => <LongButton
              mouseEnter={handleButtonState} key={data.id} id={data.id}
              classN={`long_button ${buttonStatus === index && "special_long-button"}`}
            />
            )}
          </nav>
          <div className="bigcard_text">
            <h4>{history[buttonStatus].time}</h4>
            <p>{history[buttonStatus].text}</p>
            <div className="bigcard_icons">
              { history[buttonStatus].icons.map(iconUrl => <img alt="" src={iconUrl}></img>)}
            </div>
          </div>
        </article>
    </div>
  </section>
  )
}

export default Body;
