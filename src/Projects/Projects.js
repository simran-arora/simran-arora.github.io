import React, { Component } from 'react';
import data from "./../data/data"; 
import './Projects.css';
import pic from "./../assets/photo.jpg"
import ms from "./../assets/ms_logo.jpg"
import penn from "./../assets/penn.png"

import ed_data from "../data/education.json"; 
import './Education.css';

class Work extends Component { 
	renderSwitch(key){
		switch(key) {
		case 'ms': return require("./../assets/ms_logo.jpg");
		case 'google': return  require("./../assets/google.png");
		// case 'stanford': return  require("./../assets/stanford.png");
		case 'penn': return  require("./../assets/penn.png");
		case 'vts': return  require("./../assets/vts.png");
		case 'nps': return  require("./../assets/nps.png");
		case 'stanford': return  require("./../assets/stanford_school.png");
		// case 'penn': return  require("./../assets/penn.png");
    	case 'mnt': return  require("./../assets/mnt.png");
		default: return require("./../assets/penn.png");
		}
	}

	render() {
		return (	
            <div className="Container">
				

				<h2 className="header_projects">Education </h2> <br/>      
				{
					ed_data.School.map((School) => {
					var base_url = this.renderSwitch(School.Asset);	
					return (     
						<div>  
						<div class="content_school">
							<div class="logo_school">
												<img class="logo-img_school" src={base_url} alt=" "/>
							</div>
							<div class="text_school">
							<text className="Name">{School.Name}</text>{" "}
							<br/>
							<text className="Degree">{School.Degree}<br/></text>
							<br/> 
							</div> 
						</div>  
						<text className="Description"> {School.Description}</text>
						<br/><br/><br/> 
						</div>
					);
				})
				} 
				<h2 className="header_projects">Select Awards</h2><br/>  
				<ul>      
				{
					ed_data.Awards.map((Award_) => {
					return ( 
						<li>
						<text className="Name">{Award_.Award}</text>{" "}<text className="Date"> ({Award_.Date})<br/></text>
						<text className="Details_edu"> {Award_.Details}</text> <br/><br/>  
						</li>    
					);
				})
				} 
				</ul>

				<h2 className="header_projects">Work Experience</h2><br/>
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
				}<br/><br/><br/>		
            </div>
        );
    }
} 
export default Work;

