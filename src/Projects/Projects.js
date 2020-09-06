import React, { Component } from 'react';
import data from "./../data/data"; 
import './Projects.css';
import pic from "./../assets/photo.jpg"
import ms from "./../assets/ms_logo.jpg"

class Work extends Component { 
	renderSwitch(key){
		switch(key) {
		case 'ms': return require("./../assets/ms_logo.jpg");
		case 'google': return  require("./../assets/google.png");
		case 'stanford': return  require("./../assets/stanford.png");
		case 'penn': return  require("./../assets/penn.png");
		case 'vts': return  require("./../assets/vts.png");
		default: return require("./../assets/penn.png");
		}
	}

	render() {
		return (	
            <div className="Container">
                {
					data.Experiences.map((experience) => {
						var base_url = this.renderSwitch(experience.Asset);		
						return (
							<div class="timeline">
							<div class="container_time right">
								<div class="content">
									
									<div class="logo">
										<img class="logo-img" src={base_url} alt=" "/>
                   					 </div>
									<div class="text">
										<text className="Title">{experience.Title}</text><br/>
										<text className="Company">{experience.Company}</text><br/>
										{/* <text className="Location">{experience.Loc}</text><br/> */}
									</div>
									<div class="description">
										<text className="Description"> {experience.Description} </text>
									</div>
								</div>
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