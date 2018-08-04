import React from 'react';
import { connect } from 'react-redux';
import { save } from '../../actions/save.action';
import { Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import { grey400 } from 'material-ui/styles/colors';
import PageBase from '../../components/PageBase';
import province from '../../data/province';
import getAmphor from '../../data/amphor';
import AlertDialog from '../../components/AlertDialog';

class RadioCenterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theProvince: { pid: -1, name: 'จังหวัด' },
            theAmphor: { pid: -1, name: 'อำเภอ' },
            amphorList: [],
            theCenter:'',
            theAddress1: '',
            theAddress2: '',
            showDialog: false
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
        this.props.save('http://localhost:3000/api/center', input);
    }

    render() {
        const { theProvince, theAmphor, amphorList, status } = this.state;

        return (
            <PageBase title='ใส่ข้อมูลศูนย์'>
                <AlertDialog currentRoute="RadioCenterPage"/>
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
                            onClick={this.OnSaveBtnClick}
                            disabled={status === 0}
                            primary={true} />
                    </div>
                </form>
            </PageBase>
        );
    }
};

const mapStateToProps = (state) => {
    const { status, payload } = state.saveAlert;
    return { 
        status : status,
        stausMsg: payload.msg
    };
}

const mapDispatchToProps =(dispath) => {
    return {
        save:  (uri, data) => {
            dispath(save(uri, data));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(RadioCenterPage);
