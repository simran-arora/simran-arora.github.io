// About.js
import React from 'react';
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
    <div className="page-background">
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
        {/* <h1 className="about-name">Simran Arora</h1> */}
        <div className="about-text">
            Hi, I'm Simran. I recently finished my PhD in Computer Science at Stanford, where I was advised by <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cs.stanford.edu/~chrismre/#news">Chris Ré</a> and part of the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://hazyresearch.stanford.edu/">Hazy Research Lab</a>. My PhD was generously supported by a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://vpge.stanford.edu/fellowships-funding/sgf/details">Stanford Graduate Fellowship</a> as the Sequoia Capital Fellow. I'm now an incoming assistant professor at Caltech CMS and a Principal Scientist at Together AI.
            I am also an advisor to <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cartesia.ai/">Cartesia AI</a>. <br/><br/>
            
            My research focuses on understanding and expanding the Pareto-frontier between AI quality, memory, and compute. Ideally, we can give AI developers simple and principled tools to navigate these tradeoffs. For instance, the theoretical analysis and algorithms across <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2312.04927">Zoology</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://www.together.ai/blog/based">Based</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2407.05483">Just read twice</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-06-08-cartridges">Cartridges</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2210.02441">AMA</a> serve to characterize the tradeoffs for in-context learning with foundation models. To make it easier for AI developers to map theoretical efficiency wins to wall clock efficiency wins across hardware platforms, I also develop systems like <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://github.com/HazyResearch/ThunderKittens">ThunderKittens</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-11-09-hk">HipKittens</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-11-17-pk">ParallelKittens</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles">Megakernels</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2502.10517">KernelBench</a>. <br/><br/>
            
            I created and taught Stanford's <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cs229s.stanford.edu/fall2023/">systems for machine learning (CS 229s)</a> course in Fall 2023 (I've released the slides!).<br/><br/>
            </div>
      </div>
    </div>
    </div>
  );
};
export default About;

