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
                    <text className="Venue"> {project.Venue}<br/></text>
                    <text className="Authors"> {project.Authors}<br/></text>
                    {
                      project.Details.map((Details) => {
                        return (
                          <text><a className="Details" href=
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
       
        <h2 className="Title_research">Projects</h2>
          {
            data.Projects.map((project) => {
              return (
                <div>
                  <text className="PaperTitle">{project.Title}</text>{" "}
                    <br/>
                    <text className="Venue"> {project.Venue}<br/></text>
                    <text className="Authors"> {project.Authors}<br/></text>
                    {
                      project.Details.map((Details) => {
                        return (
                          <text><a className="Details" href=
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
                          <text><a className="Details" href={base_url}> {Details.detailType}</a>{"  "}</text>
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
          <li text className="Authors">Reviewer for ICML 2020</li>
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
                    <text className="Talk_details"> {talk.Talk_details}<br/></text>
                    {
                      talk.Details.map((Details) => {
                        var base_url = this.renderContent(Details.key);	
                        return (
                          <text><a className="Details" href={base_url}> {Details.detailType}</a>{"  "}</text>
                         );
                      })
                    }
                    {
                      talk.RemoteDetails.map((Details) => {
                        return (
                          <text><a className="Details" href=
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