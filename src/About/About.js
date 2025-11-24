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
            I am also an advisor to <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cartesia.ai/">Cartesia AI</a>. I work on building AI systems and I'm excited about:
            <ul className="notes-list">
            <li>
            <p>
            <b>How do we help AI developers trade off quality, memory, and compute in principled ways?</b>
            <br/><a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2312.04927">Zoology</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://www.together.ai/blog/based">Based</a> on memory-quality tradeoffs
            <br/>
            <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2407.05483">JRT</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-06-08-cartridges">Cartridges</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2210.02441">AMA</a> on compute-quality tradeoffs
            </p>
            </li>
            <li>
            <b>We want more AI in the world. How do we make it easier to use AI across the wide range of hardware platforms and enable a multi-silicon AI future? </b>
            <br/>
            <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://github.com/HazyResearch/ThunderKittens">ThunderKittens</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-11-09-hk">HipKittens</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-11-17-pk">ParallelKittens</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2025-05-27-no-bubbles">Megakernels</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2502.10517">KernelBench</a> to simplify the process of learning about and implementing peak performance AI kernels.
            </li>
            <li>
            <b>How do we get AI to work on our personal data, and learn from our personal experiences and expertise?</b>
            <br/> 
            <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2210.02441">AMA</a> small model test-time scaling for <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/pdf/2205.13722">local AI</a>
            <br/>
            <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00580/117168">Split QA</a> non-parametric LLMs for siloed public and private data  
            </li>
            </ul>
            I created and taught Stanford's <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cs229s.stanford.edu/fall2023/">systems for machine learning (CS 229s)</a> course in Fall 2023. I've released the slides.<br/><br/>
            </div>
      </div>
    </div>
    </div>
  );
};
export default About;

