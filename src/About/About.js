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
    <div className="about-container">
      <div className="about-left">
        <img 
          src={pic} 
          alt="headshot" 
          className="about-image"
        />
        <div className="contact-info">
          <a href="mailto:simran@stanford.edu" className="email-link">
            simran@stanford.edu
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
            Welcome! My name is Simran and I'm a PhD student in Computer Science at Stanford, where I am advised by Christopher Ré. 
            
            I am part of the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://hazyresearch.stanford.edu/">Hazy Research Lab</a>.
            {/* , <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://ai.stanford.edu/">Stanford AI</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://crfm.stanford.edu/">Stanford CRFM</a> and the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://statsml.stanford.edu/">Statistical Machine Learning</a> groups, and  */}
            I am supported by a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://vpge.stanford.edu/fellowships-funding/sgf/details">Stanford Graduate Fellowship</a> as the Sequoia Capital Fellow. I am also an academic partner of <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cartesia.ai/">Cartesia AI</a> and <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://www.together.ai/">Together AI</a>. <br/><br/>
            
            I work on building next-generation AI systems:
            <br/>
            - Hardware: As the complexity of AI hardware increases, how can we make it easier to extract high utilization for new AI models? (<a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://github.com/HazyResearch/ThunderKittens">ThunderKittens</a>)
            <br/>
            - Software algorithms: How do we build AI algorithms that scale and use the hardware efficiently? (<a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2312.04927">Zoology</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2402.18668">Based</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2407.05483">JRT</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href=" https://arxiv.org/abs/2310.12109">Monarch Mixer</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2005.09117">Random Embeddings</a>) 
            <br/>
            - Systems and applications: What are the most efficient ways to use our models in AI applications? (<a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2210.02441">AMA</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2304.09433">Evaporate</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2402.07440">M2-BERT</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://ai.meta.com/blog/building-systems-to-reason-securely-over-private-data/">Private Search</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2403.09603/">Verifiable Training</a>)
            <br/><br/>
            
            I recently co-created and taught a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cs229s.stanford.edu/fall2023/">new systems for machine learning course (CS 229s)</a> at Stanford!<br/><br/>
            <b>I am on the academic job market 2024-25!</b>
        </div>
      </div>
    </div>
  );
};
export default About;

