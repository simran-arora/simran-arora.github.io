import  React, { Component } from 'react';

import './About.css';

class About extends Component {
	render() {
		return (
            <div className="AboutContainer"> 
                <h2 className="Title_about"></h2>
                <p className="AboutText"> 
                    Welcome! My name is Simran and I'm a PhD student in Computer Science at Stanford, where I am advised by Christopher Ré and part of the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://hazyresearch.stanford.edu/">Hazy Research Lab.</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://ai.stanford.edu/">Stanford AI</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://crfm.stanford.edu/">Stanford CRFM</a> and the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://statsml.stanford.edu/">Statistical Machine Learning</a> groups. I am supported by a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://vpge.stanford.edu/fellowships-funding/sgf/details">Stanford Graduate Fellowship</a> as the Sequoia Capital Fellow.<br/><br/>
                    
                    My research is in <b>machine learning systems</b>. I am fascinated by how foundation models are changing the ways we build data management systems, including:
                    <ul>
                        <li>Systems: Enabling users to scalably and securely reason over <b>challenging data types</b> (e.g., <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00580/117168/Reasoning-over-Public-and-Private-Data-in">private</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://www.vldb.org/pvldb/vol17/p92-arora.pdf">semi-structured</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/bootleg/">knowledge-intensive</a>, and <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2024-01-11-m2-bert-retrieval">long-sequence</a> data).</li>
                        <li>AI: Understanding the fundamentals of foundation model pre-training and in-context learning to build <b>simple and efficient building blocks for high-throughput data systems</b> (e.g., <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2210.02441">prompting methods</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2312.04927">understanding the throughput-recall tradeoff in efficient architectures</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://hazyresearch.stanford.edu/blog/2023-12-11-zoology2-based">extending the Pareto frontier of the throughput-recall tradeoff space</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2005.09117">simple embeddings</a>).</li>
                    </ul>
                    I recently co-created and taught a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cs229s.stanford.edu/fall2023/">new systems for machine learning course (CS 229s)</a> at Stanford!<br/><br/>
                </p>
                <br></br><br></br>
            </div>
        );
    }
} 
export default About;