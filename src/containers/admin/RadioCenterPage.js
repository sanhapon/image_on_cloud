import React from 'react';
import { Link } from 'react-router-dom'
import fetch from 'node-fetch';
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import { grey400 } from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import province from '../../data/province';
import getAmphor from '../../data/amphor';


class RadioCenterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theProvince: { pid: -1, name: 'จังหวัด' },
            theAmphor: { pid: -1, name: 'อำเภอ' },
            amphorList: [],
            theCenter:'',
            theAddress1: '',
            theAddress2: ''
        };
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
        this.setState({ [e.target.name]: e.target.value})
    }

    OnSaveBtnClick = (e) => {
        const input = [{ center: this.state.theCenter, address1: this.state.theAddress1, address2: this.state.theAddress2 }];
        fetch('http://localhost:3000/center', { 
            method: 'POST', 
            body: JSON.stringify(input),
            headers: { 'Content-Type': 'application/json' }})
        .then(res => res.json())
        .then(json => console.log(json));
    }

    render() {
        const { theProvince, theAmphor, amphorList } = this.state;

        return (
            <PageBase title='ใส่ข้อมูลศูนย์'>
                <form>
                    <TextField
                        name="theCenter"
                        hintText="ชื่อศูนย์บริการ"
                        floatingLabelText="ชื่อศูนย์บริการ"
                        onChange={this.handleTextFieldChanged}
                        fullWidth={true}
                    />
                    <TextField
                        name="theAddress1"
                        hintText="ที่อยู่ 1"
                        floatingLabelText="ที่อยู่ 1"
                        onChange={this.handleTextFieldChanged}
                        fullWidth={true}
                    />
                    <TextField
                        name="theAddress2"
                        hintText="ที่อยู่ 2"
                        floatingLabelText="ที่อยู่ 2"
                        onChange={this.handleTextFieldChanged}
                        fullWidth={true}
                    />
                    <SelectField
                        floatingLabelText={theProvince.name}
                        fullWidth={true}
                        onChange={this.handleProvinceChanged}>
                        {province.map((p) => <MenuItem key={p.pid} primaryText={p.name} value={p} />)}
                    </SelectField>

                    <SelectField
                        floatingLabelText={theAmphor.name}
                        fullWidth={true}
                        onChange={this.handleAmphorhanged}>
                        {amphorList.map((p) => <MenuItem key={p.pid} primaryText={p.name} value={p} />)}

                    </SelectField>

                    <TextField
                        hintText="หมายเลขโทรศัพท์"
                        floatingLabelText="หมายเลขโทรศัพท์"
                        fullWidth={true}
                    />
                    
                    <div style={this.styles.buttons}>
                        <Link to="/">
                            <RaisedButton label="Cancel" />
                        </Link>

                        <RaisedButton label="Save"
                            style={this.styles.saveButton}
                            type="submit"
                            onClick={this.OnSaveBtnClick}
                            primary={true} />
                    </div>
                </form>
            </PageBase>
        );
    }
};

export default RadioCenterPage;
