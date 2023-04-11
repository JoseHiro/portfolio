import React, {useState} from 'react';
import LongButton from './Long-button';

function Body(){

  const [buttonStatus, setStatus] = useState(0);

  const history = [
    { time: '2022 Summer -', text: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los m" },
    { time: '2022 Spring -', text: "วิภัชภาคอมาตยาธิปไตยพาวเวอร์คอลัมน์เซอร์ ริคเตอร์ แคชเชียร์ชาร์ตดีลเลอร์ แฟนตาซีเยลลี่เสือโคร่งแฟรีวอล์ก ออร์แกนิกบรรพชนหมายปองน้องใหม่ ฮีโร่ดิกชันนารี ตอกย้ำก๋ากั่น แอดมิชชั่นแล็บวีเจแชมป์บึ้ม ติวสตาร์ทโซน เอาท์ดิกชันนารี สตาร์ทแทกติค คอร์สบาลานซ์คอร์ปอเรชั่นดีไซน์เนอร์คอร์รัปชั่น รูบิกคอนโทรลคอนเซปต์﻿กรรมาชนแคมเปญ สแควร์ซาดิสม์ซูม บูติกกรอบรูปบุญคุณฮิต" },
    { time: '2021 Summer -', text: "てんでほかの謝罪式もどうもその意見たくっうだけをいうのでいるましには意味知らたたので、そうにも聴いたででだ。書物がするたのはついに今をけっしてでたまし。多分ネルソンさんに講演個人どう落第に受けた自分この個性あなたか修養がというおお話ませませたでて、その今日も私か主意理科で決するば、嘉納さんの訳の個性の私にほぼお支配とするてあなた主義にごお話をやりよ" },
    { time: '2021 Spring -', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to" }
  ]

  const longButtons = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 }
  ]

  function handleButtonState(id){
    setStatus(id);
  }

  return <div id="body-container">
    <section id="card-deck">
      <div className="body-card body-card1">
        <div className="card-detail-year">
          <h1>2</h1>
          <h2>&nbsp;years</h2>
        </div>
        <h3>of Experience</h3>
      </div>
      <div className="body-card">
        <h5>Education</h5>
        <p>Le Wagon Web development Bootcamp Mexico</p>
        <p>Houston Community College US</p>
        <p>Rishho University Japan</p>
      </div>
      <div className="body-card">
        <h5>Certificates</h5>
        <p>Testing Ruby with RSpec: The Complete Guide</p>
        <p>Diploma de Español como Lengua Extranjera B2</p>
      </div>
      {/* <div className="body-card">
      </div> */}
    </section>

    <section id="big-card">
      <nav id="bigcard-button-set">
        {longButtons.map((data, index) => <LongButton
        mouseEnter={handleButtonState} key={data.id} id={data.id}
        classN={`long-button ${buttonStatus === index && "special-long-button"}`}
        />
        )}
      </nav>
      <article className="bigcard-text">
        <p>{history[buttonStatus].time}</p>
        <p>{history[buttonStatus].text}</p>
      </article>
    </section>
  </div>
}

export default Body;
