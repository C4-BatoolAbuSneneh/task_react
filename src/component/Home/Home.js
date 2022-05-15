import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { BsCheck2Circle, BsInstagram } from "react-icons/bs";
import { RiFacebookFill } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
const Home = () => {
  return (
    <div>
      <div className="homepage">
        <section>
          <img className="imagelaptop" src="./images/laptop2.png" />
          <span className="dot2"></span>

          <p className="p">- منصة رقم واحد تربط بين تاجر تجزئة - </p>
          <h2 className="h2"> تعرف علينا من خلال تجربة</h2>
          <h5 className="h5">ببيع منتاجاتك وزيادة ربحك</h5>
          <h5 className="h5" id="h5">
            {" "}
            بمبلغ 0دينار{" "}
          </h5>
          <button className="button">تعرف أكثر</button>
          <p className="do">هل أنت؟</p>
          <button className="marketed">مسوق</button>
          <p className="p3">أم</p>
          <button className="supplier">مورد</button>
        </section>{" "}
      </div>
      <div className="section2">
        <section id="who">
          {" "}
          <img
            className="handsImage"
            src="https://www.aljamaa.net/ar/wp-content/uploads/2019/04/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A9-%D8%A7%D9%84%D8%AD%D8%B3%D9%86%D8%A9.jpg"
          />
          <div className="who">
            <h1 className="title">من نحن ؟</h1>
            <h2>
              حتى نساعد الزائر على المنصة يكمل نزول ويصيبه الفضول
              <br />
              لتكملة مشاهدة باقي المزايا وتنتهي بتسجيله معنا
            </h2>
            <Link className="link" to="/">
              مشاهدة المزيد
            </Link>
          </div>
        </section>{" "}
      </div>
      <div className="section3">
        <section>
          <div className="buttons">
            <button className="button6">RFG</button>
            <button className="button5">B2B</button>
            <button className="button4">بائع التجزئة</button>
            <button className="button3" id="import">
              المورد
            </button>
          </div>
          <></>
          <span className="dot"></span> <span className="whitedot1"></span>
          <span className="triangle"></span>
          <h1 className="num1">01</h1>
          <div className="line" id="line">
            <hr />
          </div>
          <span className="orangedot2"></span>{" "}
          <span className="whitedot2"></span>
          <span className="triangle2"></span>
          <h1 className="num2">02</h1>
          <div className="line" id="line2">
            <hr />
          </div>
          <span className="orangedot3"></span>{" "}
          <span className="whitedot3"></span>
          <span className="triangle3"></span>
          <h1 className="num3">03</h1>
          <div className="line3p2">
            <hr />
          </div>
          <div id="line3p3">
            <hr />
          </div>
          <span className="orangedot4"></span>{" "}
          <span className="whitedot4"></span>
          <span className="triangle4"></span>
          <h1 className="num4">04</h1>
          <div className="line" id="line4">
            <hr />
          </div>
          <span className="orangedot5"></span>{" "}
          <span className="whitedot5"></span>
          <span className="triangle5"></span>
          <h1 className="num5">05</h1>
          <div className="line" id="line5">
            <hr />
          </div>
          <span className="orangedot6"></span>{" "}
          <span className="whitedot6"></span>
          <span className="triangle6"></span>
          <h1 className="num6">06</h1>
          <div className="line6">
            <hr />
          </div>
          <div id="line6">
            <hr />
          </div>
          <Link className="link2" to="/">
            مشاهدة المزيد
          </Link>
        </section>
      </div>
      <div className="section4">
        <h1 className="features2">ميزاتنا تفيدك</h1>
        <span className="dot4"></span>
        <img className="images" src="./images/pages.png" />
        <p className="paragraph"> ميزاتنا زيادة ربحك ومن بيع المنتجات</p>
        <p className="p2"> من خلال المنصة وتعاقد مع تجار الجملة </p>{" "}
      </div>{" "}
      <div className="section5" id="features">
        <img className="ipadimage" src="./images/ipad.png" />
      </div>
      <p className="name">عنوان الفيديو</p>
      <div className="section6">
        <img
          className="man"
          src="https://nextluxury.com/wp-content/uploads/50-Rules-Of-A-Gentleman-Mans-Greatest-Burden.jpg"
        />
        <p className="features3">ميزاتنا</p>
      </div>
      <h1 className="section7h1">العضويات</h1>
      <div className="section7">
        <img
          className="handsImage2"
          src="https://www.aljamaa.net/ar/wp-content/uploads/2019/04/%D8%A7%D9%84%D9%85%D8%B9%D8%A7%D9%85%D9%84%D8%A9-%D8%A7%D9%84%D8%AD%D8%B3%D9%86%D8%A9.jpg"
        />{" "}
        <BsCheck2Circle className="checkIcon" />
        <div className="card1">
          {" "}
          <div className="square1"></div>
          <div className="triangle-up"></div>
          <h2 className="free1">مجانًا</h2>
          <h1 className="word1">مورد</h1>
          <button className="button1" onClick={() => {}}>
            إنضم الْآن
          </button>
        </div>
        <div className="card2">
          <div className="square2"></div>
          <div className="triangle-up2"></div>
          <h2 className="free2">مجانًا</h2>
          <h1 className="word2">تقليدي</h1>
          <button className="button2" onClick={() => {}}>
            إنضم الْآن
          </button>
        </div>
        <div className="card3">
          <div className="square3"></div>
          <div className="triangle-up3"></div>
          <h2 className="free3">مجانًا</h2>
          <h1 className="word3">إلكتروني</h1>
          <button className="button32" onClick={() => {}}>
            إنضم الْآن
          </button>
        </div>
      </div>
      <div className="section8">
        <h1 className="testimonial">TESTIMONIAL</h1>
        <img className="screen" src="./images/screen.png" />
        <img src="./images/screen.png" />
        <img className ="screen3" src="./images/screen.png" />
      </div>
      <h2 className="A0">عداد</h2>
      <div className="section9">
        <h2 className="A1">منتجات</h2>
        <h2 className="A2">تجارة</h2>
        <h2 className="A3">مسوقين</h2>
      </div>
      <div className="section10">
        <input className="input" placeholder="اكتب بريدك الالكتروني"></input>
        <button className="nowbutton">جرب الْآن</button>
      </div>
      <div className="section11">
      <h2 className="B1">تعرف علينا</h2>
      <h2 className="B2">RFQ</h2>
      <h2 className="B3">شكاوي</h2>
      <h2 className="B4">سياسة الخصوصية</h2>
      <h2 className="B5">الشروط والأحكام</h2>




      </div>
      <div className="footer">
        <footer>
          <img
            className="flag"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Flag_of_Jordan.svg/2000px-Flag_of_Jordan.svg.png"
          />
          <p className="paragraphfooter">المملكة الأردنية الهاشمية</p>
          <p className="call">اتصل بنا | مساعدة | اللغة </p>
          <a href="/">
            {" "}
            <BsInstagram className="icons" id="instagram" />
          </a>{" "}
          <a href="/">
            {" "}
            <ImTwitter className="icons" id="twitter" />
          </a>{" "}
          <a href="/">
            {" "}
            <RiFacebookFill className="icons" id="facebook" />
          </a>
        </footer>
      </div>
    </div>
  );
};
export default Home;
