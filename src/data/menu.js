import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';

const defaultMenus = [];

const administrator =  [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Radio Photographer', icon: <Web/>, link: '/RadioPhotoGrapherPage' },
    { text: 'Radio Center', icon: <GridOn/>, link: '/RadioCenterPage' },
    { text: 'Patient', icon: <PermIdentity/>, link: '/PatientPage' }
];

const menu = {
  administrator: administrator,
  defaultMenus: defaultMenus
}

export default menu;

