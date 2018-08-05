import React from 'react';
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import { grey400 } from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import province from '../../data/province';
import getAmphor from '../../data/amphor';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

class RadioCenterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            
            amphorList: [],
            dataToSave : {
                theCenter:'',
                theAddress1: '',
                theAddress2: '',
                theProvince: { pid: -1, name: 'จังหวัด' },
                theAmphor: { pid: -1, name: 'อำเภอ' },
            },
            errors : {
                theCenter: '',
                theAddress1: '',
                theAddress2: '',
                
            },
                
            

            
            dialog: {
                showDialog: false,
                msg: ''
            },
            saveStatus:0
        };

        this.onDialogBtnClick = this.onDialogBtnClick.bind(this);   
    }

    styles = {
        toggleDiv: {
            maxWidth: 300,
            marginTop: 40,
            marginBottom: 5
        },
        toggleLabel: {
            color: grey400,
            fontWeight: 100
        },
        buttons: {
            marginTop: 30,
            float: 'right'
        },
        saveButton: {
            marginLeft: 5
        }
    };

    handleProvinceChanged = (e, index, value) => {
        const amphorList = getAmphor(value.pid);
        this.setState({ theProvince: { pid: value.pid, name: value.name } });
        this.setState({ amphorList: amphorList });
    }

    handleAmphorhanged = (e, index, value) => {
        this.setState({ theAmphor: { pid: value.pid, name: value.name } });
    }

    handleTextFieldChanged = (e) => {
        const { dataToSave } = this.state;
        dataToSave[e.target.name] = e.target.value
        this.setState({dataToSave : dataToSave})
    }

    onSaveBtnClick = async (e) => {
        const { dataToSave } = this.state;

        try {
            const result = await fetch('http://localhost:3000/api/center', { 
                method: 'POST', 
                body: JSON.stringify(dataToSave),
                headers: { 'Content-Type': 'application/json' }})

            const json = await result.json();

            if ( json.status === 'done') {
                this.setState({dialog: {showDialog:true, msg: json.msg}, saveStatus:1});
            
            } else {
                const msg = result.status === 200? json.msg: 'ไม่สามาถเก็บข้อมูลได้'
                this.setState({dialog: {showDialog:true, msg:msg}});
            }
        }  catch (err) {
            this.setState({dialog: {showDialog:true, msg:'ไม่สามาถเก็บข้อมูลได้'}});
        }
    }
    onDialogBtnClick = () => {
        this.setState({dialog: {showDialog: false, msg : ''}});

        if (this.state.saveStatus ===1) {
            this.props.history.push('/admin/RadioCenterPageList');
        }
    }

    getDialog = () => {
        return (
            <Dialog open={ this.state.dialog.showDialog }
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
            <DialogTitle id="alert-dialog-title">{this.state.dialog.msg}</DialogTitle>
            <DialogActions>
              <RaisedButton label="ตกลง" onClick={this.onDialogBtnClick} primary={true} />  
            </DialogActions>
          </Dialog>
        );
    }


    render =() => {
        const { theProvince, theAmphor, amphorList } = this.state;

        return (
            <PageBase title='ใส่ข้อมูลศูนย์'>
                {this.getDialog()}
                <TextField
                    name="theCenter"
                    floatingLabelText="ชื่อศูนย์บริการ"
                    onChange={this.handleTextFieldChanged}
                    fullWidth={true}
                    errorText={this.state.errors["theCenter"]}
                />
                <TextField
                    name="theAddress1"
                    floatingLabelText="ที่อยู่ 1"
                    onChange={this.handleTextFieldChanged}
                    fullWidth={true}
                    errorText={this.state.errors["theAddress1"]}
                />
                <TextField
                    name="theAddress2"
                    floatingLabelText="ที่อยู่ 2"
                    onChange={this.handleTextFieldChanged}
                    fullWidth={true}
                    errorText={this.state.errors["theAddress2"]}
                />
                <SelectField
                    name="theProvince"
                    floatingLabelText={theProvince.name}
                    fullWidth={true}
                    onChange={this.handleProvinceChanged}>
                    {province.map((p) => <MenuItem key={p.pid} primaryText={p.name} value={p} />)}
                </SelectField>

                <SelectField
                    name="theAmphor"
                    floatingLabelText={theAmphor.name}
                    fullWidth={true}
                    onChange={this.handleAmphorhanged}>
                    {amphorList.map((p) => <MenuItem key={p.pid} primaryText={p.name} value={p} />)}
                </SelectField>

                <TextField
                    name="theNumber"
                    hintText="หมายเลขโทรศัพท์"
                    floatingLabelText="หมายเลขโทรศัพท์"
                    fullWidth={true}
                    errorText={this.state.errors["theNumber"]}
                />
                
                <div style={this.styles.buttons}>
                    <Link to="/">
                        <RaisedButton label="Cancel" />
                    </Link>
                    <RaisedButton label="Save"
                        style={this.styles.saveButton}
                        onClick={this.onSaveBtnClick}
                        disabled={this.state.saveStatus !== 0}
                        primary={true} />
                </div>
            </PageBase>
        );
    }
};

export default RadioCenterPage;
