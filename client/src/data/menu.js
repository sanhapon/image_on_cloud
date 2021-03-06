import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity';
import Web from 'material-ui/svg-icons/av/web';

const defaultMenus = [];

const administrator =  [
    { text: 'DashBoard', icon: <Assessment/>, link: '/dashboard' },
    { text: 'Radio Photographer', icon: <Web/>, link: '/admin/RadioPhotographerPage' },
    { text: 'Radio Photographer List', icon: <Web/>, link: '/admin/radioPhotoGrapherListPage' },
    { text: 'ใส่ข้อมูล ศูนย์บริการ', icon: <GridOn/>, link: '/admin/radioCenterPage' },
    { text: 'ศูนย์บริการ ทั้งหมด', icon: <GridOn/>, link: '/admin/radioCenterPageList'},
    { text: 'Patient', icon: <PermIdentity/>, link: '/admin/patientPage' }
];

const menu = {
  administrator: administrator,
  defaultMenus: defaultMenus
}

export default menu;

