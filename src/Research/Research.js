import React, { Component } from 'react';
import data from "../data/research.json"; 
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
        <h2 className="Title_research">Research</h2>
        
          {
            data.Research.map((project) => { 
              return (
                <div>
                  <text className="PaperTitle">{project.Title}</text>{" "}
                    <br/>
                    <text className="Authors"> {project.Authors}<br/></text>
                    <text className="Venue"> {project.Venue}, </text>
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
        <br/>

        <h2 className="Title_research">Workshops</h2>
        <ul>
          <li text className="Authors">Workshop on Decentralized and Collaborative Learning @ MLSys'23</li>
        </ul>
        <br/><br/>

        <h2 className="Title_research">Additional: Whitepapers, Reports, and Blog Posts</h2>
        <ul>
          <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2023-06-08-hyena-safari">The Safari of Deep Signal Processing: Hyena and Beyond</a> by Michael Poli, Stefano Massaroli, Simran Arora, Dan Fu, Stefano Ermon, Chris Ré, 2023</li>
          <li text className="Authors"><a href="https://crfm.stanford.edu/2023/02/18/year-in-review.html">Year in Review 2022: Technical Advances, Applications, and Social Responsibility</a> with Michael Wornow, Nandita Bhaskar, and Percy Liang, 2023.</li>
          <li text className="Authors"><a href="https://hai.stanford.edu/white-paper-building-national-ai-research-resource">Building a National AI Research Resource: A Blueprint for the National Research Cloud</a> with Principle Authors: Daniel E. Ho, Jennifer King, Russell C. Wald, Christopher Wan. We wrote an HAI White Paper in October, 2022. Section §5 Data Privacy Compliance by S. Arora, N. Guha, J. King, S. Suri, C. Wan, S. Wiltshire.</li>
          <li text className="Authors"><a href="https://arxiv.org/abs/2108.07258">On the Opportunities and Risks of Foundation Models</a> with Principle Authors: Rishi Bommasani and Percy Liang. Data Section  by L. Orr, S. Arora, K. Goel, A. Narayan, M. Zhang, C. Ré., 2021</li>
          <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2023-04-18-personalization">Ask Me Anything: Leveraging Foundation Models for Private & Personalized Systems</a> with Chris Ré, 2023.</li>
          <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2022-10-11-datacentric-fms">Foundation Models are Entering their Data-Centric Era</a> with Chris Ré, 2022.</li>
          <li text className="Authors"><a href="https://hazyresearch.stanford.edu/what-data-centric-ai-is-not">What Data Centric AI is Not</a> with Chris Ré, 2021.</li>
        </ul>
        <br/><br/>
       
        <h2 className="Title_research">Projects</h2>
          {
            data.Projects.map((project) => {
              return (
                <div>
                  <text className="PaperTitle">{project.Title}</text>{" "}
                    <br/>
                    <text className="Authors"> {project.Authors}<br/></text>
                    <text className="Venue"> {project.Venue}<br/></text>
                    {
                      project.Details.map((Details) => {
                        return (
                          <text><a className="Details" target= "_blank" rel="noopener noreferrer" href=
                            {Details.detail}>{Details.detailType}</a>{"  "}
                          </text>
                         );
                      })
                    }
                    {
                      project.LocalDetails.map((Details) => {
                        var base_url = this.renderContent(Details.detail);	
                        console.log(base_url);
                        return (
                          <text><a className="Details" target= "_blank" rel="noopener noreferrer" href={base_url}> {Details.detailType}</a>{"  "}</text>
                         );
                      })
                    }
                    <br/><br/><br/>
                </div>
              );
          })
        } 
        <br/>


        <h2 className="Title_research">Service</h2>
        <ul>
          <li text className="Authors">Reviewer for ICML 2020 (Top Reviewer Award), ACL 2021, PPAI-AAAI 2023, Table Representation Learning workshop at NeurIPS 2022, ME-FoMo Workshop at ICLR 2023</li>
          <li text className="Authors">Stanford Center for Research on Foundation Models Community & Publicity Leadership Team 2022-Present</li>
          <li text className="Authors">Running the Stanford NLP Group Lunch Summer 2022</li>
          <li text className="Authors">Undergrad Mentor in the Stanford Women in STEM Mentorship Program 2019-2020</li>
          <li text className="Authors">Undergrad Mentor in the Penn Women in CS Mentorship Program 2018-2019</li>
        </ul>
        <br/><br/>

        <h2 className="Title_research">Research Talks</h2>
          {
            data.Talks.map((talk) => {
              return (
                <div>
                  <text className="Talk">{talk.Talk}</text>{" "}
                    <br/>
                    <text className="Talk_details"> {talk.Talk_details}.</text>
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
                    <br/><br/><br/>
                </div> 
              );
          })
        } 
      </div>
    );
  }
} 
export default Research;