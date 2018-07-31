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

class RadioCenterPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            theProvince: { pid: -1, name: 'จังหวัด' },
            theAmphor: { pid: -1, name: 'อำเภอ' },
            amphorList: []
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

    render() {
        const { theProvince, theAmphor, amphorList } = this.state;

        return (
            <PageBase title='ใส่ข้อมูลศูนย์'>
                <form>
                    <TextField
                        hintText="ชื่อศูนย์บริการ"
                        floatingLabelText="ชื่อศูนย์บริการ"
                        fullWidth={true}
                    />
                    <TextField
                        hintText="ที่อยู่ 1"
                        floatingLabelText="ที่อยู่ 1"
                        fullWidth={true}
                    />
                    <TextField
                        hintText="ที่อยู่ 2"
                        floatingLabelText="ที่อยู่ 2"
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
                            primary={true} />
                    </div>
                </form>
            </PageBase>
        );
    }
};

export default RadioCenterPage;
