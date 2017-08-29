import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {blue900,white, blue500,cyan400} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
    fontFamily: 'Lato, sans-serif',
    palette: {
    },
    appBar: {
	    height: 57,
	    color: blue900
    },
    drawer: {
	    width: 230,
	    color: white
    },
    raisedButton: {
	    primaryColor: blue500,
	    secondaryColor: cyan400
    },
    zDepthShadows: 'none'    
});


export default themeDefault;
