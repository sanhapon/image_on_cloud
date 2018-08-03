import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../components/Header';
import LeftDrawer from '../components/LeftDrawer';
import withWidth, {LARGE, SMALL} from 'material-ui/utils/withWidth';
import ThemeDefault from '../theme-default';
import { connect } from 'react-redux';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navDrawerOpen: false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({navDrawerOpen: nextProps.width === LARGE});
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: this.props.loggedIn &&  !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 236;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== SMALL ? paddingLeftDrawerOpen : 0
      }
    };

    return (
      <MuiThemeProvider muiTheme={ThemeDefault}>
        <div>
          <Header styles={styles.header}
                  handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)}/>

            { this.props.loggedIn && 
                <LeftDrawer navDrawerOpen={navDrawerOpen}/>
            }
            <div style={styles.container}>
              {/* {this.props.loggedIn? this.props.children: <LoginPage /> } */}
              {this.props.children}
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}


const mapStateToProps = (state) =>{
  const { loggedIn } = state.authentication
  
  return {
    loggedIn: loggedIn
  }
}
export default connect(mapStateToProps, null, null, {pure:false})(withWidth()(App));
//export default connect(mapStateToProps)(withWidth()(App));

