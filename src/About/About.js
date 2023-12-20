import  React, { Component } from 'react';

import './About.css';

class About extends Component {
	render() {
		return (
            <div className="AboutContainer"> 
                <h2 className="Title_about"></h2>
                <p className="AboutText"> 
                    Welcome! My name is Simran and I'm a PhD student in Computer Science at Stanford, where I am advised by Prof. Christopher Ré and part of the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://hazyresearch.stanford.edu/">Hazy Research Lab.</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://ai.stanford.edu/">Stanford AI</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://crfm.stanford.edu/">Stanford CRFM</a> and the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://statsml.stanford.edu/">Statistical Machine Learning</a> groups. I am partially supported by a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://vpge.stanford.edu/fellowships-funding/sgf/details">Stanford Graduate Fellowship</a> as the Sequoia Capital Fellow.<br/><br/>
                    
                    My research is in <b>machine learning systems</b>. I am fascinated by how foundation models are changing the ways we build data management systems. Recently, I've been excited about:
                    <ul>
                        <li>Systems: Enabling users to scalably and reliably incorporate <b>challenging data types into ML Systems</b> - <i>e.g.,</i> <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00580/117168/Reasoning-over-Public-and-Private-Data-in">private</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://www.vldb.org/pvldb/vol17/p92-arora.pdf">semi-structured</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/bootleg/">knowledge-intensive</a>, and long-sequence data.</li>
                        <li>AI: Understanding the fundamentals of foundation model pre-training to build <b>simple and efficient building blocks for ML systems</b>. Lately, we find certain prompting formats are prevalent in pre-training data and design a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2210.02441">simple, efficient prompting method</a>. We <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2312.04927">study</a> how architectures gain the skills to perform in-context learning and design a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2023-12-11-zoology2-based">simple, efficient architecture</a>. We study the benefits of contextual embeddings and ask when we can get away with <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2005.09117">simple, efficient <i>random</i> embeddings</a>.</li>
                    </ul>
                    I recently co-created and taught a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cs229s.stanford.edu/fall2023/">new systems for machine learning course (CS 229s)</a> at Stanford!<br/><br/>
                    
                    I previously graduated from the University of Pennsylvania <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://fisher.wharton.upenn.edu/">Jerome Fisher Management & Technology</a> program, where I studied CS at Penn Engineering and Finance at Wharton.
                    At Penn, I worked with Prof. Boon Thau Loo, Prof. Vincent Liu, and Prof. Vijay Kumar.<br/><br/>
                
                    In addition to CS, my interests include teaching, physics, squash, reading, finance and personal investing, and supporting the SF Giants and GS Warriors.
                </p>
                <br></br><br></br>
            </div>
        );
    }
} 
export default About;