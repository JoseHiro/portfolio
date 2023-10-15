import React, { useState } from "react";
import LongButton from "./Long-button";
import node from "../../../img/icons/node-js.png";
import javascript from "../../../img/icons/javascript.png";
import mongoDb from "../../../img/icons/mongodb.png";
import react from "../../../img/icons/react.png";
import ruby from "../../../img/icons/ruby.png";
import html from "../../../img/icons/html.png";
import css from "../../../img/icons/css.png";
import mysql from "../../../img/icons/mysql.png";
import git from "../../../img/icons/git.png";
import bootstrap from "../../../img/icons/bootstrap.png";
import cplusplus from "../../../img/icons/c.png";
import jquery from "../../../img/icons/jquery.png";
import typescript from "../../../img/icons/typescript.png";
import npm from "../../../img/icons/npm.png";
import "./history.css";

function Body() {
  const [buttonStatus, setStatus] = useState(0);

  const history = [
    {
      time: "2023 Fall -",
      text: "Actively working as intern at GACCI, I contributed to the establishment of Excel-format quotation estimates from various cities, enhancing the user experience by allowing users to visualize and edit the Excel sheets more efficiently. This expansion opened up the app to a wider range of clients, as it initially targeted only companies in a specific region. Additionally, I improved the user interface (UI) by introducing features like a job-selecting toggle in forms and a search engine for specific company or user research.",
      icons: [node, typescript, javascript, mongoDb, react, git],
    },
    {
      time: "2023 Spring -",
      text: "I integrated React into my Node.js project, shifting towards REST-API and GraphQL-style development. This led to a feature-rich e-commerce platform with rigorous data validation, mailing capabilities, and strong security. I started an internship with GACCI in June, actively contributing to complex development and frontend tasks in the dynamic start-up environment.",
      icons: [
        node,
        javascript,
        jquery,
        mongoDb,
        react,
        html,
        css,
        bootstrap,
        git,
        npm,
      ],
    },
    {
      time: "2022 Fall -",
      text: "I attended Le Wagon, where I engaged in a transformative experience. I actively contributed to the creation of notable applications such as Seekr, Ventri, and Caralibro. The bootcamp provided an exceptional environment for collaborating on team projects with passionate and driven peers. This experience allowed me to gain expertise in all aspects of app development, including planning, development, deployment, and debugging. It was a significant step in my journey towards becoming a proficient developer.",
      icons: [ruby, node, javascript, mongoDb, mysql, html, css, git, npm],
    },
    {
      time: "2022 Spring -",
      text: "I embarked on a search for bootcamps to accelerate my learning journey. At that point, I was delving into Ruby, Node.js, Mongo.js, and MySQL. However, I encountered a barrier in my progress, making it challenging to take significant steps forward. Ultimately, I made the decision to invest my time and financial resources in a transformative opportunity, which would prove to be a pivotal moment in my educational and professional growth.",
      icons: [
        node,
        javascript,
        jquery,
        mongoDb,
        react,
        html,
        css,
        bootstrap,
        npm,
        git,
      ],
    },
    {
      time: "2021 Fall -",
      text: "I officially enrolled in a Computer Science degree program and during the semester, I decided to take a C++ class. This marked a significant departure from my previous focus on web development. Learning C++, a compiled language, provided me with valuable insights into the programming world. It offered a stark contrast to the script languages I had primarily worked with until that point and enabled me to make meaningful comparisons between different programming paradigms.",
      icons: [cplusplus, javascript, html, css, bootstrap],
    },
    {
      time: "2021 Spring -",
      text: "I embarked on my journey to become a programmer, exploring various platforms to gain a foundational understanding of programming. One such platform I utilized was Progate, which provided comprehensive learning resources. Beginning with HTML and CSS, I was introduced to the coding world, and it was fascinating to see my original design concepts come to life on the screen. JavaScript served as another essential language, enabling me to infuse dynamic elements into my creations.",
      icons: [javascript, html, css],
    },
  ];

  const longButtons = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];

  function handleButtonState(id) {
    setStatus(id);
  }

  return (
    <section id="history">
      <h5>Get to know me</h5>
      <h5 className="message">Career</h5>
      <div className="container history_container">
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
              <p>NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)</p>
              <p>
                React - The Complete Guide 2023 (incl. React Router & Redux)
              </p>
            </div>
          </article>
        </div>

        <article id="big_card">
          <nav className="long_buttons">
            {longButtons.map((data, index) => (
              <LongButton
                mouseEnter={handleButtonState}
                key={data.id}
                id={data.id}
                classN={`long_button ${
                  buttonStatus === index && "special_long-button"
                }`}
              />
            ))}
          </nav>
          <div className="bigcard_text">
            <h4>{history[buttonStatus].time}</h4>
            <p>{history[buttonStatus].text}</p>
            <div className="bigcard_icons">
              {history[buttonStatus].icons.map((iconUrl) => (
                <img alt="" src={iconUrl}></img>
              ))}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Body;
