import React from 'react';

import Drawer from 'material-ui/Drawer';
import { spacing, typography } from 'material-ui/styles';
import { white, blue600 } from 'material-ui/styles/colors';
import MenuItem from 'material-ui/MenuItem';
import { Link } from 'react-router-dom'
import Avatar from 'material-ui/Avatar';
import menu from '../data/menu';
import { connect } from 'react-redux';

class LeftDrawer extends React.Component {

  styles = {
    logo: {
      cursor: 'pointer',
      fontSize: 22,
      color: typography.textFullWhite,
      lineHeight: `${spacing.desktopKeylineIncrement}px`,
      fontWeight: typography.fontWeightLight,
      backgroundColor: blue600,
      paddingLeft: 40,
      height: 56,
    },
    menuItem: {
      color: white,
      fontSize: 14
    },
    avatar: {
      div: {
        padding: '15px 0 20px 15px',
        backgroundImage: 'url(' + require('../images/material_bg.png') + ')',
        height: 45
      },
      icon: {
        float: 'left',
        display: 'block',
        marginRight: 15,
        boxShadow: '0px 0px 0px 8px rgba(0,0,0,0.2)'
      },
      span: {
        paddingTop: 12,
        display: 'block',
        color: 'white',
        fontWeight: 300,
        textShadow: '1px 1px #444'
      }
    }
  };

  getMenuItems(role) {
    
    return menu[role];
  };


  render() {
    const { navDrawerOpen, username, role} = this.props;
    return (
      <Drawer
        docked={true}
        open={navDrawerOpen}>
        <div style={this.styles.logo}>
          Material Admin
        </div>
        <div style={this.styles.avatar.div}>
          <Avatar src="http://www.material-ui.com/images/uxceo-128.jpg"
            size={50}
            style={this.styles.avatar.icon} />
          <span style={this.styles.avatar.span}>{username}</span>
        </div>
        <div>
          {this.getMenuItems(role).map((menu, index) =>
            <MenuItem
              key={index}
              style={this.styles.menuItem}
              primaryText={menu.text}
              leftIcon={menu.icon}
              containerElement={<Link to={menu.link} />}
            />
          )}
        </div>
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  const { loggedIn, payload } = state.authentication

  return {
    loggedIn: loggedIn,
    role: payload ? payload.role : '',
    username: payload? payload.username : ''
  }
}
export default connect(mapStateToProps)(LeftDrawer);
