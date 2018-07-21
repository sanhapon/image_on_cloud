import React from 'react';
import { Redirect } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Checkbox from 'material-ui/Checkbox';
import {grey500, white} from 'material-ui/styles/colors';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import Help from 'material-ui/svg-icons/action/help';
import TextField from 'material-ui/TextField';
import ThemeDefault from '../theme-default';
import authentication from '../services/authentication';

class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username:'', password:'', redirectToReferrer:false};

  }
  
  styles = {
    loginContainer: {
      minWidth: 320,
      maxWidth: 400,
      height: 'auto',
      position: 'absolute',
      top: '20%',
      left: 0,
      right: 0,
      margin: 'auto'
    },
    paper: {
      padding: 20,
      overflow: 'auto'
    },
    buttonsDiv: {
      textAlign: 'center',
      padding: 10
    },
    flatButton: {
      color: grey500
    },
    checkRemember: {
      style: {
        float: 'left',
        maxWidth: 180,
        paddingTop: 5
      },
      labelStyle: {
        color: grey500
      },
      iconStyle: {
        color: grey500,
        borderColor: grey500,
        fill: grey500
      }
    },
    loginBtn: {
      float: 'right'
    },
    btn: {
      background: '#4f81e9',
      color: white,
      padding: 7,
      borderRadius: 2,
      margin: 2,
      fontSize: 13
    },
    btnFacebook: {
      background: '#4f81e9'
    },
    btnGoogle: {
      background: '#e14441'
    },
    btnSpan: {
      marginLeft: 5
    },
  }


  onTextChanged = (e) => {
    const { name, value } = e.target;
    this.setState( { [name]: value });
  }

  onClickLogin = async () => {
    const {username, password} = this.state;
    await authentication.authenticate(username, password);
    if (authentication.authenticate) {
        this.setState({redirectToReferrer:true});
    }
  }

  render () {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    
    if (redirectToReferrer === true) {
        console.log('redirect to ', from);
        return <Redirect to={from} />
    }


    return (
    <MuiThemeProvider muiTheme={ThemeDefault}>
      <div>
        <div style={this.styles.loginContainer}>

          <Paper style={this.styles.paper}>

            <form>
              <TextField
                hintText="E-mail"
                floatingLabelText="E-mail"
                fullWidth={true}
                name="username"
                onChange = {this.onTextChanged}
              />
              <TextField
                hintText="Password"
                floatingLabelText="Password"
                fullWidth={true}
                type="password"
                name="password"
                onChange = {this.onTextChanged}
              />

              <div>
                <Checkbox
                  label="Remember me"
                  style={this.styles.checkRemember.style}
                  labelStyle={this.styles.checkRemember.labelStyle}
                  iconStyle={this.styles.checkRemember.iconStyle}
                />

               
                  <RaisedButton label="Login"
                                primary={true}
                                style={this.styles.loginBtn}
                                onClick = {this.onClickLogin}
                                />
               
              </div>
            </form>
          </Paper>

          <div style={this.styles.buttonsDiv}>
            <FlatButton
              label="Register"
              href="/"
              style={this.styles.flatButton}
              icon={<PersonAdd />}
            />

            <FlatButton
              label="Forgot Password?"
              href="/"
              style={this.styles.flatButton}
              icon={<Help />}
            />
          </div>
        </div>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default LoginPage;
