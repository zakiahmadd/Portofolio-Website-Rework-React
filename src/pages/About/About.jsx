import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import aboutImage from "../../assets/duduk setengah.JPG";
import Separator from "../../components/Separator.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./About.css"

function AboutPage() {
  return (
    <>
      <Header />
      <div class="about-container">
        <Separator title="About Me" fontSize="25px"/> 
        <div class="profile-container" data-aos="fade-up" data-aos-duration="1000">
          <img src={aboutImage} alt="profile-picture" data-aos="fade-up" data-aos-duration="1000"data-aos-delay="500"/>
          <div class="about-item" data-aos="fade-left" data-aos-duration="1000"data-aos-delay="1000">
            <h4>Zaki Ahmad</h4>
            <p>
              Zaki Ahmad is currently an undergraduate student majoring in
              Actuarial Science in University of Padjadjaran. This academic
              journey has equipped them with a strong foundation in mathematics,
              statistics, and risk assessment. Alongside their major, they have
              developed a keen interest in software development and software
              engineering.
            </p>
            <p>
              Through various projects and coursework, Zaki has gained
              experience in coding, problem-solving, and creating efficient
              software solutions. They are passionate about integrating their
              analytical skills from actuarial science with the innovative world
              of software development to create impactful solutions.
            </p>
            <p class="contact-me">Contact Me: zakiahmadv7@gmail.com</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
