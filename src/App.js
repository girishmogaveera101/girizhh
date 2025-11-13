import React, { useState, useEffect } from 'react';
import './css/App.css';
import image1 from './css/image.png';
import image2 from './css/image3.png';
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [daysPassed, setDaysPassed] = useState(0);
  const startDate = "2004-03-18";

  useEffect(() => {
    const calculateDaysPassed = () => {
      const currentDate = new Date();
      const targetDate = new Date(startDate);
      const timeDifference = currentDate - targetDate;
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      setDaysPassed(days);
    };
    calculateDaysPassed();
  }, [startDate]);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light" id="navBar">
        <a className="navbar-brand" id="title" href="#home">
          Girish Mogaveera
        </a>

        <button
          id="navBtn"
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" id="navui">
            <li className="nav-item active">
              <a className="nav-link" id="navItem" href="#home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="navItem" href="#text3">
                TechStack
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="navItem" href="#connect">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="navItem" href="#text1">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Intro Section */}
      <div id="home"></div>
      <div className="container1">
        <div className="item1">
          <p id="heading1">hola, chicos..</p>
          <p id="heading2">I'm Girish</p>
          <p id="heading3">
            <TypeAnimation
              sequence={[
                "I do Web Dev",
                1000,
                "I do 3D Art",
                1000,
                "I don't Sleep",
                1000,
              ]}
              speed={1}
              repeat={Infinity}
              style={{ fontSize: '2em' }}
            />
          </p>
          <p id="heading4">
            I'm a <b>{daysPassed}</b>-day-old code wrangler, tech tinkerer, and certified caffeine enthusiast. 
            I spend my days turning <b>coffee into code</b> and solving problems with a dash of creativity 
            and a sprinkle of sheer stubbornness.
          </p>
        </div>
        <div className="item2">
          <img id="image1" alt="developer illustration" src={image1} />
        </div>
      </div>

      {/* About Section */}
      <div className="container2">
        <div className="item3">
          <img id="image2" alt="3D work" src={image2} />
        </div>
        <div className="item4">
          <p id="text1">About me</p>
          <p id="text2">
            I'm a programmer who turns caffeine into code and ideas into reality. Whether it's crafting sleek
            designs, solving complex problems, or mastering both frontend and backend, I've got web development covered.
            <br /><br />
            When I'm not coding, I'm diving into Blender, bringing 3D models and animations to life.
            <br /><br />
            In a nutshell: I'm a tech-savvy, multitasking creative with a love for all things digital. 
            Now, if you'll excuse me, I have a 3D masterpiece to render and a few designs to perfect!
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="container3">
        <div className="item5">
          <p id="text3">Tech Stack</p>

          <p id="text4">Web Dev</p>
          <div className="iconbox2">
            <img alt="HTML" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
            <img alt="CSS" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
            <img alt="JS" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            <img alt="Next.js" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" />
            <img alt="MongoDB" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" />
            <i className="devicon-express-original" id="devicon"></i>
            <img alt="React" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
            <img alt="Node.js" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          </div>

          <div className="iconbox">
            <img alt="Vue" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" />
            <img alt="Tailwind" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" />
            <i className="devicon-flask-original-wordmark" id="devicon"></i>
          </div>

          <p id="text4">Languages</p>
          <div className="iconbox">
            <img alt="Python" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
            <img alt="C++" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" />
            <img alt="PHP" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
            <img alt="C" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" />
            <img alt="MySQL" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" />
          </div>

          <p id="text4">Deployment</p>
          <div className="iconbox">
            <img alt="Docker" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg" />
            <img alt="Kubernetes" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" />
            <i className="devicon-vercel-original-wordmark" id="devicon"></i>
            <img alt="Heroku" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-plain-wordmark.svg" />
            <img alt="Netlify" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg" />
          </div>

          <p id="text4">Tools</p>
          <div className="iconbox">
            <i className="devicon-github-original-wordmark" id="devicon"></i>
            <img alt="Linux" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
            <img alt="Ubuntu" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-original.svg" />
            <img alt="Blender" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" />
            <img alt="Git" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" />
            <img alt="Figma" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
            <img alt="VSCode" className="devicon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container4">
        <div className="item6">
          <p id="connect">Let's join forces!</p>
          <p id="text5">
            I'm on the hunt for new adventures, so if you’ve got an opportunity or just want to say "hey," 
            my inbox is wide open—like, pizza box open. 
            Drop me a line, and I’ll reply faster than a cat video goes viral!
          </p>
          <div className="iconbox">
            <a href="https://www.linkedin.com/in/girish-mogaveera-852860275/">
              <i className="devicon-linkedin-plain colored" id="devicon1"></i>
            </a>
            <a href="https://x.com/girizzzh">
              <i className="devicon-twitter-original" id="devicon1"></i>
            </a>
            <a href="https://github.com/girishmogaveera101">
              <i className="devicon-github-original-wordmark" id="devicon1"></i>
            </a>
          </div>
        </div>

        <div className="item7">
          <form action="https://getform.io/f/bgdygona" method="POST">
            <table id="mailto">
              <tbody>
                <tr>
                  <td>
                    <p id="label1">Your email</p>
                    <input name="email" id="inp1" type="text" placeholder="123@gmail.com" />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p id="label1">Your Name</p>
                    <input name="name" id="inp1" type="text" placeholder="Your Name.." />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p id="label1">Message</p>
                    <input name="message" id="inp1" type="text" placeholder="Message goes here..." />
                  </td>
                </tr>
                <tr>
                  <td>
                    <input id="sendmail" type="submit" value="submit" />
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <i>
          <p id="footertext">"Code hard, nap hard."</p>
        </i>
        <div className="smallbox">
          <a href="https://www.linkedin.com/in/girish-mogaveera-852860275/">
            <i className="devicon-linkedin-plain colored" id="devicon2"></i>
          </a>
          <a href="https://x.com/girizzzh">
            <i className="devicon-twitter-original" id="devicon2"></i>
          </a>
          <a href="https://github.com/girishmogaveera101">
            <i className="devicon-github-original-wordmark" id="devicon2"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
