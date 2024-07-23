import React, { Component } from 'react';
import data from "../data/research.json"; 
import select_data from "../data/select_research.json"; 
import './Research.css';

class Research extends Component {
  renderContent(path){
      console.log(path)
		  switch(path) {
        case 'grasp': return require("./../assets/grasp_presentation.pdf");  
        case 'naval': return require("./../assets/naval_presentation.pdf");
        case 'acl20': return 'https://www.youtube.com/watch?v=bCPeg0Tp64s&feature=youtu.be';
        case 'p3p': return require("./../assets/p3p_presentation.pdf");
        case 'metadata': return require("./../assets/Metadata_Shaping.pdf");
      }
	}
	render() {
		return (
      <div className="ResearchContainer">
        <h2 className="Title_research">Select Research (Complete List in CV)</h2>
        
          {
            select_data.Research.map((project) => { 
              return (
                <div>
                  <text className="PaperTitle">{project.Title}</text>{" "}
                    <br/>
                    <text className="Authors"> {project.Authors}<br/></text>
                    <text className="Venue"> {project.Venue}<br/></text>
                    {
                      project.LocalDetails.map((Details) => {
                        var base_url = this.renderContent(Details.detail);  
                        console.log(base_url);
                        return (
                          <text><a className="Details" target= "_blank" rel="noopener noreferrer" href={base_url}> {Details.detailType}</a>{"  "}</text>
                         );
                      })
                    }
                    {
                      project.Details.map((Details) => {
                        return (
                          <text><a className="Details" target= "_blank" rel="noopener noreferrer" href=
                            {Details.detail}>{Details.detailType}</a>{"  "}
                          </text>
                         );
                      })
                    }
                    
                    <br/><br/><br/>
                </div>
              );
          })
        } 

        <h2 className="Title_research">Notes</h2>
        <ul>
        <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2024-06-22-ac">Efficient language models as arithmetic circuits</a> by Simran Arora, Sabri Eyuboglu, and Chris Ré, 2024.</li>
        <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2024-05-12-tk">GPUs Go Brrr</a> by Benjamin Spector, Aaryan Singhal, Simran Arora, and Chris Ré, 2024.</li>
          <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2023-06-08-hyena-safari">The Safari of Deep Signal Processing: Hyena and Beyond</a> by Michael Poli, Stefano Massaroli, Simran Arora, Dan Fu, Stefano Ermon, Chris Ré, 2023.</li>
          <li text className="Authors"><a href="https://crfm.stanford.edu/2023/02/18/year-in-review.html">Year in Review 2022: Technical Advances, Applications, and Social Responsibility</a> with Michael Wornow, Nandita Bhaskar, and Percy Liang, 2023.</li>
          <li text className="Authors"><a href="https://hai.stanford.edu/white-paper-building-national-ai-research-resource">Building a National AI Research Resource: A Blueprint for the National Research Cloud</a> with Principle Authors: Daniel E. Ho, Jennifer King, Russell C. Wald, Christopher Wan. We wrote an HAI White Paper in October, 2022. Section §5 Data Privacy Compliance by S. Arora, N. Guha, J. King, S. Suri, C. Wan, S. Wiltshire.</li>
          <li text className="Authors"><a href="https://arxiv.org/abs/2108.07258">On the Opportunities and Risks of Foundation Models</a> with Principle Authors: Rishi Bommasani and Percy Liang. Data Section  by L. Orr, S. Arora, K. Goel, A. Narayan, M. Zhang, C. Ré., 2021.</li>
          <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2023-04-18-personalization">Ask Me Anything: Leveraging Foundation Models for Private & Personalized Systems</a> with Chris Ré, 2023.</li>
          <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2022-10-11-datacentric-fms">Foundation Models are Entering their Data-Centric Era</a> with Chris Ré, 2022.</li>
          <li text className="Authors"><a href="https://hazyresearch.stanford.edu/what-data-centric-ai-is-not">What Data Centric AI is Not</a> with Chris Ré, 2021.</li>
        </ul>
        <br/><br/>

        <h2 className="Title_research">Recent Talks</h2>
          {
            select_data.Talks.map((talk) => {
              return (
                <div>
                  <text className="PaperTitle">{talk.Talk}</text>{" "}
                    <br/>
                    <text className="Venue"> {talk.Talk_details}<br/></text>
                    {
                      talk.Details.map((Details) => {
                        var base_url = this.renderContent(Details.key);	
                        return (
                          <text><a className="Details" target= "_blank" rel="noopener noreferrer" href={base_url}> {Details.detailType}</a>{"  "}</text>
                         );
                      })
                    }
                    {
                      talk.RemoteDetails.map((Details) => {
                        return (
                          <text><a className="Details" target= "_blank" rel="noopener noreferrer" href=
                            {Details.detail}>{Details.detailType}</a>{"  "}
                          </text>
                         );
                      })
                    }
                    <br/><br/>
                </div>
              );
          })
        }<br/>
        <br/><br/>
      </div>
    );
  }
} 
export default Research;