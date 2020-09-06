import React, { Component } from 'react';

import './About.css';
import data from './../data/about.json';

class About extends Component {
	render() {
		return (
            <div className="AboutContainer">
                <h2 className="Title_about">  </h2>
                <p className="AboutText"> 
                    Hi! I'm Simran and I'm a PhD student in Computer Science at Stanford.
                </p>
                <ul>
                    <li class="abtli">I'm broadly interested in distributed systems and machine learning.</li>
                    <li class="abtli">Advised by Prof. Christopher Ré and part of the <a class="abt_a" href="http://hazyresearch.stanford.edu/">Hazy Research Lab.</a></li>
                    <li class="abtli">Affiliated with the <a class="abt_a" href="https://ai.stanford.edu/">Stanford AI</a>, <a class="abt_a" href="https://dawn.cs.stanford.edu/">Stanford DAWN</a> and the <a class="abt_a" href="http://statsml.stanford.edu/">Statistical Machine Learning</a> groups.  </li>
                    <li class="abtli">I am grateful to be supported by a <a class="abt_a" href="https://vpge.stanford.edu/fellowships-funding/sgf/details">Stanford Graduate Fellowship</a> as the Sequoia Capital Fellow. </li>
                </ul>

                <p className="AboutText"> 
                    I graduated in 2019 from the University of Pennsylvania.
                </p>
                <ul>
                    <li class="abtli">I was part of the <a class="abt_a" href="https://fisher.wharton.upenn.edu/">Jerome Fisher Program Management & Technology</a> dual-degree program, where I studied CS in Penn Engineering (BSE CS) and Finance in Wharton Business School (BS Economics).</li>
                    <li class="abtli">I was part of the <a class="abt_a" href="https://netdb.cis.upenn.edu/">NetDB</a> research group, where I worked with Prof. Boon Thau Loo and Prof. Vincent Liu, and the <a class="abt_a" href="https://www.grasp.upenn.edu/research-groups/kumar-lab">GRASP</a> research lab, where I worked with Prof. Vijay Kumar.</li>
                </ul>

                <p> 
                    <text className="AboutText">In addition to computer science, my interests include:</text><text className="AboutSubText"> Teaching, physics, running/hiking/squash, reading, personal investing, and supporting the SF Giants and GS Warriors.</text>
                </p>
                
            </div>
        );
    }
} 
export default About;