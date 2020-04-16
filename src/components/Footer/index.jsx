import React from 'react'

export const Footer = () => {
  return (
    <footer id="contact">
      <h1>beiatrix pedrasa</h1>

      <h2>SOFTWARE ENGINEER + VISUAL DESIGNER</h2>

      <h4>TECHNICAL SKILLS</h4>
      <div className="footer-gradient"></div>
      <p>PROFICIENT | JavaScript, HTML5, CSS3, Node.js, Express, React, Redux, Axios, Sequelize, PostgreSQL, Git & Github, Bootstrap, Material-UI, Visual Studio Code, Chrome Dev Tools, Bash</p>
      <p>FAMILIAR | SQL, SVG, Python, jQuery, D3, OAuth, Passport, Sockets, Stripe, Heroku, Webpack, Mocha, Chai, Test-Driven Development, Agile Development</p>
      <br />

      <h4>CREATIVE SKILLS</h4>
      <div className="footer-gradient"></div>
      <p>Adobe Creative Cloud (Photoshop, Illustrator, InDesign, AfterEffects), Figma, Final Cut Pro X, SketchUp, Cinema4D, Hand-Drawn Illustration</p>
      <br />

      {/* socials */}
      <a href="https://www.linkedin.com/in/beiatrix/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a href="mailto:beiatrixmgmt@gmail.com">
        <i class="fas fa-envelope"></i>
      </a>
      <a href="https://www.github.com/beiatrix/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-github"></i>
      </a>
      <a href="https://www.instagram.com/beiatrix/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="https://www.twitter.com/beiatrix/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="https://www.youtube.com/beiatrix/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-youtube"></i>
      </a>
      <a href="https://beiatrix.tumblr.com/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-tumblr"></i>
      </a>
      <a href="https://www.beiatrix.com/" target="_blank" rel="noopener noreferrer">
        <i class="fab fa-chrome"></i>
      </a>

      <div id="copyright">
        <p>© beiatrix pedrasa 2019</p>
      </div>
    </footer>
  )
}