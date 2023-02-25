import  React, { Component } from 'react';
import Route from 'react';

import './About.css';

class About extends Component {
	render() {
		return (
            <div className="AboutContainer"> 
                <h2 className="Title_about"></h2>
                <p className="AboutText"> 
                    Hi! I'm Simran and I'm a PhD student in Computer Science at Stanford. 
                    I'm broadly interested in machine learning, data management, and privacy. 
                    I am advised by Prof. Christopher Ré and part of the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://hazyresearch.stanford.edu/">Hazy Research Lab.</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://ai.stanford.edu/">Stanford AI</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://crfm.stanford.edu/">Stanford CRFM</a> and the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://statsml.stanford.edu/">Statistical Machine Learning</a> groups. 
                    I am grateful have recieved support from the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://vpge.stanford.edu/fellowships-funding/sgf/details">Stanford Graduate Fellowship</a> as the Sequoia Capital Fellow. I previously graduated in 2019 from the University of Pennsylvania as part of the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://fisher.wharton.upenn.edu/">Jerome Fisher Management & Technology</a> program, where I studied CS in Penn Engineering and Finance at Wharton.
                    At Penn, I was part of the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://netdb.cis.upenn.edu/">NetDB</a> research group, where I worked with Prof. Boon Thau Loo and Prof. Vincent Liu, and the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://www.grasp.upenn.edu/research-groups/kumar-lab">GRASP</a> research lab, where I worked with Prof. Vijay Kumar.<br/><br/>
                
                    In addition to CS, my interests include teaching, physics, running/hiking/squash, reading, finance and personal investing, and supporting the SF Giants and GS Warriors.
                </p>
                <br></br><br></br>
            </div>
        );
    }
} 
export default About;