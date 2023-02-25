import  React, { Component } from 'react';

import './About.css';

class About extends Component {
	render() {
		return (
            <div className="AboutContainer"> 
                <h2 className="Title_about"></h2>
                <p className="AboutText"> 
                    Hi! I'm Simran and I'm a PhD student in Computer Science at Stanford. 
                    I am broadly interested in understanding how machine learning can benefit challenges in data management. 
                    For instance, how can we incorporate more personal data into our ML systems in a way that preserves privacy?
                    How can we enable non-ML experts to prototype data-centric systems and perform data analysis, over noisy, potentially unfamiliar data, at scale?<br/><br/>
                    
                    I am advised by Prof. Christopher Ré and part of the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://hazyresearch.stanford.edu/">Hazy Research Lab.</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://ai.stanford.edu/">Stanford AI</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://crfm.stanford.edu/">Stanford CRFM</a> and the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://statsml.stanford.edu/">Statistical Machine Learning</a> groups. 
                    I am grateful have recieved support from the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://vpge.stanford.edu/fellowships-funding/sgf/details">Stanford Graduate Fellowship</a> as the Sequoia Capital Fellow. I previously graduated from the University of Pennsylvania <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://fisher.wharton.upenn.edu/">Jerome Fisher Management & Technology</a> program, where I studied CS in Penn Engineering and Finance at Wharton.
                    At Penn, I worked with Prof. Boon Thau Loo and Prof. Vincent Li in the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://netdb.cis.upenn.edu/">NetDB</a> group and Prof. Vijay Kumar in the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://www.grasp.upenn.edu/research-groups/kumar-lab">GRASP</a> lab.<br/><br/>
                
                    In addition to CS, my interests include teaching, physics, running/hiking/squash, reading, finance and personal investing, and supporting the SF Giants and GS Warriors.
                </p>
                <br></br><br></br>
            </div>
        );
    }
} 
export default About;