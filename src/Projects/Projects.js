import React, { Component } from 'react';
import data from "./../data/data"; 
import './Projects.css';
import pic from "./../assets/photo.jpg"
import ms from "./../assets/ms_logo.jpg"
import penn from "./../assets/penn.png"

class Work extends Component { 
	renderSwitch(key){
		switch(key) {
		case 'ms': return require("./../assets/ms_logo.jpg");
		case 'google': return  require("./../assets/google.png");
		case 'stanford': return  require("./../assets/stanford.png");
		case 'penn': return  require("./../assets/penn.png");
		case 'vts': return  require("./../assets/vts.png");
		case 'nps': return  require("./../assets/nps.png");
		default: return require("./../assets/penn.png");
		}
	}

	render() {
		return (	
            <div className="Container">
				<h2 className="header_projects">Experience</h2><br/><br/>
                {
					data.Experiences.map((experience) => { 
						var base_url = this.renderSwitch(experience.Asset);		
						return (

								<div class="content">
									<div class="text">
										<text className="Title_projects">{experience.Title}</text><br/>
										<text className="Company">{experience.Company}</text><br/>
										{/* <text className="Location">{experience.Loc}</text><br/> */}
										<text className="Description"> {experience.Description} </text>
									</div>
								</div> 
	
						);
					})
				}

				<br/><br/><h2 className="header_projects">Teaching Experiences:</h2><br/><br/>
				{
					data.Teaching.map((experience) => {
						var base_url = this.renderSwitch(experience.Asset);		
						return (
								<div class="content">
									<div class="text">
										<text className="Title_projects">{experience.Title}</text><br/>
										<text className="Company">{experience.Company}</text><br/>
										{/* <text className="Location">{experience.Loc}</text><br/> */}
										<text className="Description"> {experience.Description} </text>
									</div>
								</div>
						);
					})
				}		
            </div>
        );
    }
} 
export default Work;