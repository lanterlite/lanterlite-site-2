import React, { Component } from 'react';

/* Image */
import youtube_img from '../static/images/youtube.png';
import facebook_img from '../static/images/facebook.png';
import logo_img from '../static/images/cream-500x500.png';
import twitter_img from '../static/images/twitter.png';
import background_img from '../static/images/bgimage.jpg';
import Paper from 'material-ui/Paper'
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

// import footer_img_1 from '../static/images/charisma_app.png';
// import footer_img_2 from '../static/images/smart_partner.png';
// import footer_img_3 from '../static/images/quarpp_app.png';
// import footer_img_4 from '../static/images/machinary_online.png';
// import footer_img_5 from '../static/images/giora_app.png';

/* Style */
import '../static/css/app.css';
import '../static/css/navbar.css';
import '../static/css/slideshow.css';
import '../static/css/style.css';

export default class IslamComponent extends Component {
	constructor(){
		super()
		this.state = {
			materi: {
				dosaDosaBesar: false
			}
		}
	}

	componentWillMount(){
		// document.body.style.backgroundColor = "green";
		document.body.style.backgroundImage = `url(${background_img})`;
	}

	materi1Click = () => {
		if(this.state.materi.dosaDosaBesar === false){
			this.setState({
				materi:{
					...this.state.materi,
					dosaDosaBesar: true					
				}
			})
		}
		else if(this.state.materi.dosaDosaBesar === true){
			this.setState({
				materi:{
					...this.state.materi,
					dosaDosaBesar: false					
				}			
			})
		}		
	}
	render() {
		const styles = {
			title: {
				fontFamily:"lanterlite_cambria",
	    		fontSize: 30,
	    		color:"#C2A060"
        	},
			materi: {
				fontFamily:"lanterlite_cambria",
	    		fontSize: 20,
	    		color:"#C2A060"
        	},
        	div: {
        		margin: "10px"
        	}
        };

        console.log(this.state.materi.dosaDosaBesar)
		const numbers = [1, 2, 3, 4, 5];
		const listItems = numbers.map((number) =>
			<li>{number}</li>
		);

        return(
			<div className="App">
			<div id="white-home-post">
			<div className="card card-1">
				<div>
					<font style={styles.title} >Materi</font>
					<div style={styles.div}><a style={{textDecoration: 'none'}} onClick={this.materi1Click} href="#"><font style={styles.materi} >Dosa-dosa Besar</font></a></div>
						{this.state.materi.dosaDosaBesar? 
							<div className="card-2">
								<div><a style={{textDecoration: 'none'}} href="#"><font style={styles.materi} onClick="this.materi1Click">Syirik</font></a> </div>
								<div><a style={{textDecoration: 'none'}} href="#"><font style={styles.materi} onClick="this.materi1Click">Membunuh</font></a> </div>
								<div><a style={{textDecoration: 'none'}} href="#"><font style={styles.materi} onClick="this.materi1Click">Berbuat Syihir</font></a> </div>
							</div>
							: 
							null
						}
					<div style={styles.div}><a style={{textDecoration: 'none'}} href="#"><font style={styles.materi} >Sirah Nabawiyah</font></a></div>
					<div style={styles.div}><a style={{textDecoration: 'none'}} href="#"><font style={styles.materi} >Kisah Sahabat Nabi (saw.)</font></a></div>
				</div>
			</div>
			<div className="card card-1">
				<div>
					<font style={styles.title} >Tanya Jawab</font>
				</div>
			</div>
			</div>
			</div>
	    );
	}		
}
