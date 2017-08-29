import React, { Component } from 'react';
import logo from './static/images/blog-header.png';

/* Image */
import youtube_img from './static/images/youtube.png';
import facebook_img from './static/images/facebook.png';
import logo_img from './static/images/cream-500x500.png';
import twitter_img from './static/images/twitter.png';
import background_img from './static/images/bgimage.jpg';
import footer_img_1 from './static/images/charisma_app.png';
import footer_img_2 from './static/images/smart_partner.png';
import footer_img_3 from './static/images/quarpp_app.png';
import footer_img_4 from './static/images/machinary_online.png';
import footer_img_5 from './static/images/giora_app.png';

import IslamComponent from './components/IslamComponent.js'

/* Style */
import './static/css/app.css';
import './static/css/navbar.css';
import './static/css/slideshow.css';
import './static/css/style.css';

// var sectionStyle = {
// 	width: "100%",
// 	height: "100%",
// 	backgroundImage: `url(${background_img})`
// };

class App extends Component {
	constructor(){
		super()
		this.state = {
			showIslam: true,
			showTechnology: false,
			showProduct: false
		}
	}
	componentWillMount(){
		// document.body.style.backgroundColor = "green";
		document.body.style.backgroundImage = `url(${background_img})`;
	}


	onClick = () =>{
		console.log('test')
		this.setState({
			...this.state,
			showIslam: true
		})
	}

	render() {
		const styles = ({
			stretch: {
				width: 200,
				height: 70
			},
			youtube: {
				width: 30,
				height: 30
			},
			logo: {
				width: 250,
				height: 250
			},
			footer: {
				width: 178,
				height: 100
			},
			td_footer: {
				width: 40,
				height: 4,
				paddingTop: 16,
				paddingRight: 16,
				paddingBottom: 0,
				paddingLeft: 16
			},
		});
		console.log(document.title)
	    return (
	      <div className="App">
		  {/* <section style={ sectionStyle }> */}
				<div id="label">
					<img src={logo} alt="lanterlite logo" style={styles.stretch}/>
				</div>

			  	<div id="nav-bar">
				<ul>
					<li><a style={{ fontFamily:"lanterlite_cambria", fontSize: 17 }} href="#" ><font >HOME</font></a></li>
					<li><a style={{ fontFamily:"lanterlite_cambria", fontSize: 17 }} onClick={this.onClick} ><font >ISLAM</font></a></li>
					<li><a style={{ fontFamily:"lanterlite_cambria", fontSize: 17 }} href="#" ><font >TECHNOLOGY</font></a></li>
					<li><a style={{ fontFamily:"lanterlite_cambria", fontSize: 17 }} href="#" ><font >PRODUCT</font></a></li>
				</ul>
				</div>

				{ this.state.showIslam?
					<IslamComponent />
					:
				<div id="home-post">
				{/*<table cellPadding="0px" id="development-table"> */}
					<table cellPadding="0px">
					<tbody>
					<tr>
						<td width="1px" height="20px" ></td>
						<td width="25px"></td>
						<td width="600px"></td>
						<td width="20px"><img src={youtube_img} alt="youtube logo" style={styles.youtube}/></td>
						<td width="70px" ><a style={{textDecoration: 'none'}} href="https://www.youtube.com/channel/UChzvNoCSmP1b57IRI1Fq1pA"><font style={{ fontFamily:"lanterlite_cambria", fontSize: 17 }} color="#FFFCC9">YouTube</font></a></td>
					</tr>
					<tr>
						<td height="2px" rowSpan="10"><img src={logo_img} alt="youtube logo" style={styles.logo}/></td>
						<td ></td>
						<td ></td>
						<td width="20px"><img src={facebook_img} alt="youtube logo" style={styles.youtube}/></td>
						<td ><a style={{textDecoration: 'none'}} href="https://www.facebook.com/lanterlite"><font style={{ fontFamily:"lanterlite_cambria", fontSize: 17 }} color="#FFFCC9">Facebook</font></a></td>
					</tr>
					<tr>
						<td height="2px"></td>
						<td></td>
						<td width="20px"><img src={twitter_img} alt="youtube logo" style={styles.youtube}/></td>
						<td ><a style={{textDecoration: 'none'}} href="https://www.twitter.com/lanterlite"><font style={{ fontFamily:"lanterlite_cambria", fontSize: 17 }} color="#FFFCC9">Twitter</font></a></td>
					</tr>
					<tr>
						<td></td>
						<td height="20px"></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td height="1px" ><font style={{ fontFamily:"lanterlite_cambria", fontSize: 70 }} color="#FFFCC9">Lanterlite</font></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td></td>
						<td height="1px" ><font style={{ fontFamily:"lanterlite_cambria", fontSize: 17 }} color="#FFFCC9">Lantern Light, Islam Technological Enlightenment</font></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td height="20px" ></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td height="20px" ></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td height="20px" ></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td height="20" ></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					</tbody>
					</table>
				</div>
				}


				<div id="home-post-bottom">
					<table cellPadding="0px">
					<thead>
					
					<tr>
						<td style={{textAlign:"center"}} colSpan="5" width="40px" height="10px"><font color="#A0522D" style={{ fontFamily:"lanterlite_impact", fontSize:25 }} ><b>
						------------------------------------------------------------ Coming Soon -------------------------------------------------------------
						</b></font></td>
					</tr>			
					</thead>
					<tbody>
					<tr>
						<td style={styles.td_footer} ><img alt="footer-1" src={footer_img_1} style={styles.footer} /></td>
						<td style={styles.td_footer} ><img alt="footer-2" src={footer_img_2} style={styles.footer} /></td>
						<td style={styles.td_footer} ><img alt="footer-3" src={footer_img_3} style={styles.footer} /></td>
						<td style={styles.td_footer} ><img alt="footer-4" src={footer_img_4} style={styles.footer} /></td>
						<td style={styles.td_footer} ><img alt="footer-5" src={footer_img_5} style={styles.footer} /></td>
					</tr>
					<tr style={styles.tr_footer}>
						<td style={{ textAlign:"center" }} ><font color="#A0522D" style={{fontFamily:"lanterlite_cambria", fontSize: 17 }} ><b>Lanterlite Charisma</b></font></td>
						<td style={{ textAlign:"center" }} ><font color="#A0522D" style={{fontFamily:"lanterlite_cambria", fontSize: 17 }} ><b>Lanterlite SmartPartner</b></font></td>
						<td style={{ textAlign:"center" }} ><font color="#A0522D" style={{fontFamily:"lanterlite_cambria", fontSize: 17 }} ><b>Lanterlite Quarpp</b></font></td>
						<td style={{ textAlign:"center" }} ><font color="#A0522D" style={{fontFamily:"lanterlite_cambria", fontSize: 17 }} ><b>Lanterlite Machinary</b></font></td>
						<td style={{ textAlign:"center" }} ><font color="#A0522D" style={{fontFamily:"lanterlite_cambria", fontSize: 17 }} ><b>Lanterlite Giora</b></font></td>
					</tr>
					</tbody>
					</table>
				</div>

					<div id="home-post-footer">
						<table cellPadding="0px">
						<thead>
						<tr>
							<td rowSpan="5"><font color="#FFFCC9" style={{fontFamily:"lanterlite_cambria", fontSize: 20 }} >Tentang Lanterlite</font></td>
						</tr>			
						</thead>
						<tbody>
						<tr>
							<td><font color="#FFFCC9" style={{fontFamily:"lanterlite_cambria"}} >Saran dan masukkan, bisa pembaca sampaikan melalui email kami di <i>lanterlite@gmail.com</i>.</font></td>
						</tr>
						</tbody>
						</table>
					</div>

					<div id="home-post-footest">
						<font color="#C2A060" style={{fontFamily:"lanterlite_cambria"}} >- Designed by Lanterlite -</font>
					</div>
				{/* </section> */}
		  </div>
	    );
	}		
}

export default App;
