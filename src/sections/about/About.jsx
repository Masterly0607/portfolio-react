import AboutImage from "../../assets/about.jpeg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>

          <p>
            I am a final-year (Year 5) Software Engineering student at ITC with
            experience in full-stack web development using Vue.js, React.js
            (Next.js), Laravel, and ExpressJS. I have built responsive web
            applications, worked with APIs, and managed databases such as MySQL
            and MongoDB.
          </p>

          <p>
            I previously worked as a Frontend Developer Intern at the Institute
            of Banking and Finance for six months and as a Backend Developer
            Intern at CyberLab (ITC) for three months. In addition, I have
            developed several personal projects, including e-commerce and social
            media web applications, using technologies such as React, Next.js,
            and MongoDB. I am passionate about continuous learning and building
            real-world, impactful applications.
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
