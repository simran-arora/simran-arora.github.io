import React, { Component } from 'react';
import data from "../data/teaching.json"; 
import '../Projects/Education.css';

class Education extends Component {
  renderSwitch(key){
		switch(key) {
		case 'stanford': return  require("./../assets/stanford_school.png");
		case 'penn': return  require("./../assets/penn.png");
    case 'mnt': return  require("./../assets/mnt.png");
		default: return require("./../assets/penn.png");
		}
	}

	render() {
		return (
      <div className="SchoolContainer">
        <h2 className="header_projects">Course Instructor</h2><br/>
        {
					data.Instructing.map((experience) => {
						var base_url = this.renderSwitch(experience.Asset);		
						return (
								<div class="content">
									<div class="text">
                    <div class='title_section'>
										<text className="Title_projects">{experience.Title}</text>
                    {
                      experience.Details.map((Details) => {
                        return (
                          <text><a className="Details" target= "_blank" rel="noopener noreferrer" href=
                            {Details.detail}>{Details.detailType}</a>{"  "}
                          </text>
                         );
                      })
                    }</div>
										<text className="Company">{experience.Company}</text><br/>
										<text className="Description"> {experience.Description} </text><br/>
                    
									</div>
								</div>
						);
					})
				}<br/>

        <h2 className="header_projects">Course Assistant</h2><br/>
				{
					data.Teaching.map((experience) => {
						var base_url = this.renderSwitch(experience.Asset);		
						return (
								<div class="content">
									<div class="text">
										<text className="Title_projects">{experience.Title}</text><br/>
										<text className="Company">{experience.Company}</text><br/>
										<text className="Description"> {experience.Description} </text>
									</div>
								</div>
						);
					})
				}<br/>
      </div>

    );
  }
} 
export default Education;