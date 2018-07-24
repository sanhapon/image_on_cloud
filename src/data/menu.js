import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';

const admin =  [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Radio Photographer', icon: <Web/>, link: '/RadioPhotoGrapherPage' },
    { text: 'Radio Center', icon: <GridOn/>, link: '/RadioCenterPage' },
    { text: 'Patient', icon: <PermIdentity/>, link: '/PatientPage' }
];

const menu = {
  admin
}

export default menu;

