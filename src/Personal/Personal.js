import React, { Component } from 'react';

import './Personal.css';

class Personal extends Component {
	render() {
		return (
            <div>
                <div className="lists">
                    <div className="books">
                        <h2>Some of my favorite books are: </h2>
                        <h3>Fiction</h3>
                        <ul>
                            <li>Anna Karenina</li>
                            <li>East of Eden</li>
                            <li>Infinite Jest</li>
                            <li>Jane Eyre</li>
                            <li>The Girl with the Dragon Tattoo</li>
                            <li>Shantaram</li>
                        </ul>
                    </div>
                    <div className="books">
                        <h3>Non-Fiction:</h3>
                        <ul>
                            <li>The Emperor of All Maladies</li>
                            <li>Half the Sky</li>
                            <li>Just Mercy</li>
                            <li>When Breath Becomes Air</li>
                            <li>Surely You're Joking Mr. Feynman!</li>
                            <li>Creativity, Inc.</li>
                        </ul>
                    </div>
                </div>

                <hr className="hr"/>
                <h2>I also love to run!</h2><br/>
                <iframe height='160' width='300' frameborder='0' allowtransparency='true' scrolling='no' src='https://www.strava.com/athletes/44286294/activity-summary/59936b8bf82b47dad81b097f1b13abf349321a40'></iframe>
                <hr className="hr"/>
                <h2>... and travel!</h2><br/>
                <img src="http://chart.apis.google.com/chart?cht=map:fixed=-70,-180,80,180&chs=450x300&chf=bg,s,336699&chco=d0d0d0,cc0000&chd=s:9999999999999999999999&chld=MX|PE|NI|LK|KR|SG|JP|IN|CN|NZ|AU|VA|GB|ES|NL|IT|GR|FR|BE|DE|US|CA" width="450" height="300" /><br/>visited 22 countries (9.77%)<br/>
                <a href="https://douwe.com/projects/visited?region=world">Create your own map!</a>
            </div>
        );
    }
} 
export default Personal;