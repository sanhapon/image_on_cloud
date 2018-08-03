import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Button from '@material-ui/core/Button';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { white } from 'material-ui/styles/colors';
import { logout } from '../actions/authentication.action';
import { connect } from 'react-redux';

class Header extends React.Component {

  getTitleMessage = () => {
    return this.props.loggedIn? `ยินต้อนรับ ${this.props.username}`: ``;
  };

  onLogout = (e) => {
    e.preventDefault();
    this.props.logout();
  }
  render() {
    const { styles, handleChangeRequestNavDrawer} = this.props;

    const style =  {
      appBar: {
        position: 'fixed',
        top: 0,
        overflow: 'hidden',
        maxHeight: 57
      },
      menuButton: {
        marginLeft: 10
      },
      iconsRightContainer: {
        marginLeft: 20
      },
      logout: {
        marginTop:6,
        marginRight: 20,
        color:white
      },
    };

    return (
        <div>
            <AppBar
              style={{...styles, ...style.appBar}}
              title={<span>{this.getTitleMessage()}</span>}
              iconElementLeft={
                  <IconButton style={style.menuButton} onClick={handleChangeRequestNavDrawer}>
                    <Menu color={white} />
                  </IconButton>
              }
              iconElementRight={
                <div style={style.iconsRightContainer}>
                  {this.props.loggedIn &&
                    <Button style={style.logout} onClick={this.onLogout}>Log out</Button>
                  }
                </div>
              }
            />
          </div>
      );
  }
}

const mapStateToProps = (state) => {
  const { loggedIn, payload } = state.authentication;

  return {
    loggedIn: loggedIn,
    username: loggedIn? payload.username : '',
    role: loggedIn? payload.role: ''
  };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    logout : () => {
      dispatch(logout());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
