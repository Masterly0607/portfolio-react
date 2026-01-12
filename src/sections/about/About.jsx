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
            <img src={AboutImage} alt="About" />
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
            I am a fresh graduate in Software Engineering from the Institute of
            Technology of Cambodia (ITC) with hands-on experience in full-stack
            web development using Vue.js, React.js (Next.js), Spring, Laravel,
            and Express.js. I have built responsive web applications, integrated
            REST APIs, and worked with databases including MySQL and MongoDB.
          </p>

          <p>
            I completed a six-month Frontend Developer Internship at the
            Institute of Banking and Finance and a three-month Backend Developer
            Internship at CyberLab (ITC). I have also developed multiple
            personal projects, including e-commerce and video calling
            applications, using React, Next.js, and MongoDB. I am passionate
            about continuous learning and building real-world, impactful
            applications.
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
