// import React, { Component } from 'react';
// import data from "../data/research.json"; 
// import select_data from "../data/select_research.json"; 
// import './Research.css';

// class Research extends Component {
//   renderContent(path){
//       console.log(path)
// 		  switch(path) {
//         case 'grasp': return require("./../assets/grasp_presentation.pdf");  
//         case 'naval': return require("./../assets/naval_presentation.pdf");
//         case 'acl20': return 'https://www.youtube.com/watch?v=bCPeg0Tp64s&feature=youtu.be';
//         case 'p3p': return require("./../assets/p3p_presentation.pdf");
//         case 'metadata': return require("./../assets/Metadata_Shaping.pdf");
//       }
// 	}
// 	render() {
// 		return (
//       <div className="ResearchContainer">
//         <h2 className="Title_research">Select Research (Complete List in CV)</h2>
        
//           {
//             select_data.Research.map((project) => { 
//               return (
//                 <div>
//                   <text className="PaperTitle">{project.Title}</text>{" "}
//                     <br/>
//                     <text className="Authors"> {project.Authors}<br/></text>
//                     <text className="Venue"> {project.Venue}<br/></text>
//                     {
//                       project.LocalDetails.map((Details) => {
//                         var base_url = this.renderContent(Details.detail);  
//                         console.log(base_url);
//                         return (
//                           <text><a className="Details" target= "_blank" rel="noopener noreferrer" href={base_url}> {Details.detailType}</a>{"  "}</text>
//                          );
//                       })
//                     }
//                     {
//                       project.Details.map((Details) => {
//                         return (
//                           <text><a className="Details" target= "_blank" rel="noopener noreferrer" href=
//                             {Details.detail}>{Details.detailType}</a>{"  "}
//                           </text>
//                          );
//                       })
//                     }
                    
//                     <br/><br/><br/>
//                 </div>
//               );
//           })
//         } 

//         <h2 className="Title_research">Notes</h2>
//         <ul>
//         <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2024-06-22-ac">Efficient language models as arithmetic circuits</a> by Simran Arora, Sabri Eyuboglu, and Chris Ré, 2024.</li>
//         <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2024-05-12-tk">GPUs Go Brrr</a> by Benjamin Spector, Aaryan Singhal, Simran Arora, and Chris Ré, 2024.</li>
//           <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2023-06-08-hyena-safari">The Safari of Deep Signal Processing: Hyena and Beyond</a> by Michael Poli, Stefano Massaroli, Simran Arora, Dan Fu, Stefano Ermon, Chris Ré, 2023.</li>
//           <li text className="Authors"><a href="https://crfm.stanford.edu/2023/02/18/year-in-review.html">Year in Review 2022: Technical Advances, Applications, and Social Responsibility</a> with Michael Wornow, Nandita Bhaskar, and Percy Liang, 2023.</li>
//           <li text className="Authors"><a href="https://hai.stanford.edu/white-paper-building-national-ai-research-resource">Building a National AI Research Resource: A Blueprint for the National Research Cloud</a> with Principle Authors: Daniel E. Ho, Jennifer King, Russell C. Wald, Christopher Wan. We wrote an HAI White Paper in October, 2022. Section §5 Data Privacy Compliance by S. Arora, N. Guha, J. King, S. Suri, C. Wan, S. Wiltshire.</li>
//           <li text className="Authors"><a href="https://arxiv.org/abs/2108.07258">On the Opportunities and Risks of Foundation Models</a> with Principle Authors: Rishi Bommasani and Percy Liang. Data Section  by L. Orr, S. Arora, K. Goel, A. Narayan, M. Zhang, C. Ré., 2021.</li>
//           <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2023-04-18-personalization">Ask Me Anything: Leveraging Foundation Models for Private & Personalized Systems</a> with Chris Ré, 2023.</li>
//           <li text className="Authors"><a href="https://hazyresearch.stanford.edu/blog/2022-10-11-datacentric-fms">Foundation Models are Entering their Data-Centric Era</a> with Chris Ré, 2022.</li>
//           <li text className="Authors"><a href="https://hazyresearch.stanford.edu/what-data-centric-ai-is-not">What Data Centric AI is Not</a> with Chris Ré, 2021.</li>
//         </ul>
//         <br/><br/>

//         <h2 className="Title_research">Recent Talks</h2>
//           {
//             select_data.Talks.map((talk) => {
//               return (
//                 <div>
//                   <text className="PaperTitle">{talk.Talk}</text>{" "}
//                     <br/>
//                     <text className="Venue"> {talk.Talk_details}<br/></text>
//                     {
//                       talk.Details.map((Details) => {
//                         var base_url = this.renderContent(Details.key);	
//                         return (
//                           <text><a className="Details" target= "_blank" rel="noopener noreferrer" href={base_url}> {Details.detailType}</a>{"  "}</text>
//                          );
//                       })
//                     }
//                     {
//                       talk.RemoteDetails.map((Details) => {
//                         return (
//                           <text><a className="Details" target= "_blank" rel="noopener noreferrer" href=
//                             {Details.detail}>{Details.detailType}</a>{"  "}
//                           </text>
//                          );
//                       })
//                     }
//                     <br/><br/>
//                 </div>
//               );
//           })
//         }<br/>
//         <br/><br/>
//       </div>
//     );
//   }
// } 
// export default Research;

import React, { Component } from 'react';
import data from "../data/research.json"; 
import select_data from "../data/select_research.json"; 
import './Research.css';

class Research extends Component {
  renderContent(path){
    console.log(path)
    switch(path) {
      // case 'grasp': return require("./../assets/grasp_presentation.pdf");  
      // case 'naval': return require("./../assets/naval_presentation.pdf");
      // case 'acl20': return 'https://www.youtube.com/watch?v=bCPeg0Tp64s&feature=youtu.be';
      // case 'p3p': return require("./../assets/p3p_presentation.pdf");
      // case 'metadata': return require("./../assets/Metadata_Shaping.pdf");
      default: return '';
    }
  }

  render() {
    return (
      <div className="ResearchContainer">
        <div className="section-header">
          <h2 className="Title_research">Select Research</h2>
          <div className="subtitle">Complete list in CV</div>
        </div>
        
        <div className="papers-container">
          {select_data.Research.map((project, index) => { 
            return (
              <div key={index} className="paper-container">
                <span className="PaperTitle">{project.Title}</span>
                <span className="Authors">{project.Authors}</span>
                <span className="Venue">{project.Venue}</span>
                <div className="details-container">
                  {project.LocalDetails.map((Details, idx) => {
                    const base_url = this.renderContent(Details.detail);  
                    return (
                      <a 
                        key={`local-${idx}`}
                        className="Details" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href={base_url}
                      >
                        {Details.detailType}
                      </a>
                    );
                  })}
                  {project.Details.map((Details, idx) => {
                    return (
                      <a 
                        key={`remote-${idx}`}
                        className="Details" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href={Details.detail}
                      >
                        {Details.detailType}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="Title_research">Notes</h3>
      <ul className="notes-list">
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2025-03-24-based-retro">
            BASED ✌️: our one year retrospective
          </a> (2025)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-06-22-ac">
            Efficient language models as arithmetic circuits
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-11-27-tk-fp8">
          ThunderKittens: Bringing fp8 to theaters near you
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-10-29-tk2">
          Easier, Better, Faster, Cuter
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-05-12-tk">
            GPUs Go Brrr
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-10-14-lolcats-p1">
          Linearizing LLMs with LoLCATs
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-07-01-jrt">
          Just read twice: closing the recall gap for recurrent language models
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2024-05-20-m2-bert-retrieval">
          Long-Context Retrieval Models with Monarch Mixer
          </a> (2024)
        </li>
        <li>
          <a href="https://www.together.ai/blog/based">
          Based: Simple linear attention language models balance the recall-throughput tradeoff
          </a> (2024)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2023-07-25-m2-bert">
          Monarch Mixer: Revisiting BERT, Without Attention or MLPs
          </a> (2023)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2023-12-11-zoology0-intro">
          Zoology: Overview
          </a> (2023)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2023-06-08-hyena-safari">
            The Safari of Deep Signal Processing: Hyena and Beyond
          </a> (2023)
        </li>
        <li>
          <a href="https://crfm.stanford.edu/2023/02/18/year-in-review.html">
            Year in Review 2022: Technical Advances, Applications, and Social Responsibility
          </a> (2023)
        </li>
        <li>
          <a href="https://hai.stanford.edu/white-paper-building-national-ai-research-resource">
            Building a National AI Research Resource: A Blueprint for the National Research Cloud
          </a> (2022)
        </li>
        <li>
          <a href="https://arxiv.org/abs/2108.07258">
            On the Opportunities and Risks of Foundation Models
          </a> (2021)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2023-04-18-personalization">
            Ask Me Anything: Leveraging Foundation Models for Private & Personalized Systems
          </a> (2023)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/blog/2022-10-11-datacentric-fms">
            Foundation Models are Entering their Data-Centric Era
          </a> (2022)
        </li>
        <li>
          <a href="https://hazyresearch.stanford.edu/what-data-centric-ai-is-not">
            What Data Centric AI is Not
          </a> (2021)
        </li>
      </ul>
      </div>
    );
  }
} 

export default Research;