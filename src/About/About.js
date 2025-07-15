// About.js
import React from 'react';
// import pic from "../assets/profile copy.jpeg";
import pic from "../assets/profile.jpg";
import './About.css';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
// import { faGithub, faDropbox } from '@fortawesome/free-brands-svg-icons';
// import { library } from '@fortawesome/fontawesome-svg-core';
import githubIcon from "../assets/github-brands-solid.svg";
import twitterIcon from "../assets/twitter-brands-solid.svg";
import googleScholarIcon from "../assets/google-scholar-brands-solid.svg";


// library.add(faGraduationCap, faGithub, faDropbox);


const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <img 
          src={pic} 
          alt="headshot" 
          className="about-image"
        />
        <div className="contact-info">
          <a href="mailto:simran@cs.stanford.edu" className="email-link">
            simran@cs.stanford.edu
          </a>
          <div className="social-links">
            <a 
              href="https://scholar.google.com/citations?user=rGRsWH8AAAAJ"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={googleScholarIcon} 
                alt="Google Scholar"
                className="icon-image"
              />
            </a>
            <a 
              href="https://github.com/simran-arora"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={githubIcon} 
                alt="GitHub"
                className="icon-image"
              />
            </a>
            <a 
              href="https://x.com/simran_s_arora"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src={twitterIcon} 
                alt="Twitter"
                className="icon-image"
              />
            </a>
            <a 
              href={require("../assets/Simran_Arora_CV.pdf")}
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </div>
        </div>
      </div>
      
      <div className="about-right">
        <h1 className="about-name">Simran Arora</h1>
        <div className="about-text">
            Welcome! My name is Simran and I'm a PhD student in Computer Science at Stanford, where I am advised by Chris Ré. 
            
            I am part of the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://hazyresearch.stanford.edu/">Hazy Research Lab</a> and supported by a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://vpge.stanford.edu/fellowships-funding/sgf/details">Stanford Graduate Fellowship</a> as the Sequoia Capital Fellow.
            I am also an advisor to <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cartesia.ai/">Cartesia AI</a> and an academic partner of <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://www.together.ai/">Together AI</a>. <br/><br/>
            
            My research is in AI systems. I focus on expanding the Pareto frontier between quality and efficiency, to unlock new AI capabilities, by considering AI algorithms, hardware, and applications in lockstep. Recently, I've looked at:
            <br/>
            <ul className="notes-list">
            <li>
            <b>Algorithms</b>: How do we build AI architectures that scale efficiently? 
            <br/>(<a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2312.04927">Zoology</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://www.together.ai/blog/based">Based</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2407.05483">JRT</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2024-10-14-lolcats-p1">LoLCATS</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://www.together.ai/blog/monarch-mixer">Monarch Mixer</a>) 
            </li>
            <li>
            <b>Hardware</b>: As the complexity of AI hardware increases, how can we make it easier to extract high utilization for new AI algorithms? 
            <br/>
            (<a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://github.com/HazyResearch/ThunderKittens">ThunderKittens</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles">Megakernels</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2502.10517">KernelBench</a>)
            </li>
            <li>
            <b>Applications</b>: How do we bridge the efficiency gaps that emerge as models are deployed in new settings, such as data management?
            <br/> 
            (<a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2210.02441">AMA</a> for <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/2205.13722">personal data</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-06-08-cartridges">Cartridges</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2304.09433">Evaporate</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2205.09911">Data Wrangling</a>)
            </li>
            </ul>
            Recently created / taught <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cs229s.stanford.edu/fall2023/">systems for machine learning (CS 229s)</a> at Stanford, materials are released.<br/><br/>
            </div>
      </div>
    </div>
  );
};
export default About;

