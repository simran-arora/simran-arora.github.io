import React, { Component } from 'react';
import data from "../data/education.json"; 
import './Education.css';

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
        <h2>Education</h2> <br/>      
          {
            data.School.map((School) => {
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
        <h2>Select Awards</h2><br/>  
        <ul>      
        {
            data.Awards.map((Award_) => {
              return ( 
                <li>
                  <text className="Award">{Award_.Award}</text>{" "}<text className="Date"> ({Award_.Date})<br/></text>
                  <text className="Details_edu"> {Award_.Details}</text> <br/><br/>  
                </li>    
              );
          })
          } 
        </ul>
      </div>
    );
  }
} 
export default Education;