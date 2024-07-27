import  React, { Component } from 'react';

import './About.css';

class About extends Component {
	render() {
		return (
            <div className="AboutContainer"> 
                <h2 className="Title_about"></h2>
                <p className="AboutText"> 
                    Welcome! My name is Simran and I'm a PhD student in Computer Science at Stanford, where I am advised by Christopher Ré. 
                    
                    I am part of the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://hazyresearch.stanford.edu/">Hazy Research Lab.</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://ai.stanford.edu/">Stanford AI</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://crfm.stanford.edu/">Stanford CRFM</a> and the <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="http://statsml.stanford.edu/">Statistical Machine Learning</a> groups, and am supported by a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://vpge.stanford.edu/fellowships-funding/sgf/details">Stanford Graduate Fellowship</a> as the Sequoia Capital Fellow. I am also an academic partner of <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cartesia.ai/">Cartesia.ai</a> and <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://www.together.ai/">Together.ai</a>. <br/><br/>
                    
                    My research studies the intersection between machine learning and systems. I focus on understanding the quality and efficiency tradeoffs between alternative ML architectures using theory and empirical lenses (<a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2312.04927">Zoology</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href=" https://arxiv.org/abs/2310.12109">Monarch Mixer</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2210.02441">AMA</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2005.09117">Random Embeddings</a>). I develop new architectures and algorithms to push the Pareto frontier of these tradeoff spaces (<a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2402.18668">Based</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2407.05483">JRT</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2402.07440">M2-BERT</a>). I build systems to translate our ML insights to practical improvements (<a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://arxiv.org/abs/2304.09433">Evaporate</a>, <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://github.com/HazyResearch/ThunderKittens">ThunderKittens</a>). 
                    <br/><br/>
                   
                    

                    I recently co-created and taught a <a class="abt_a" target= "_blank" rel="noopener noreferrer" href="https://cs229s.stanford.edu/fall2023/">new systems for machine learning course (CS 229s)</a> at Stanford!<br/><br/>
                </p>
                <br></br><br></br>
            </div>
        );
    }
} 
export default About;