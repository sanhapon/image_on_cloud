import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EditIcon from 'material-ui/svg-icons/image/edit';
import RenderToLayer from 'material-ui/internal/RenderToLayer';
import { getCenters } from '../../actions/radioCenterPageList.action';
import province from '../../data/province';
import { amphor } from '../../data/amphor';

const theProvince = province;
const theAmphor = amphor;

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

class RadioCenterPageList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = () => {
    this.props.getCenters(0);
  }

  getProvinceName = (pid) => theProvince.filter(p=>p.pid === pid)[0].name;

  getAmphorName = (pid) => theAmphor.filter(p=>p.pid === pid)[0].name;

  render = () => {
    const { classes, centers } = this.props;
    return (
        <Paper className={classes.root}>
        <Table className={classes.table}>
            <TableHead>
            <TableRow>
                <TableCell>ชื่อศูนย์</TableCell>
                <TableCell>ที่อยู่ 1</TableCell>
                <TableCell>ที่อยู่ 2</TableCell>
                <TableCell>จังหวัด</TableCell>
                <TableCell>อำเภอ</TableCell>
                <TableCell>หมายเลขโทรศัพท์</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {centers.map(c => {
                return (
                <TableRow>
                    <TableCell>{c.theCenter}</TableCell>
                    <TableCell>{c.theAddress1}</TableCell>
                    <TableCell>{c.theAddress2}</TableCell>
                    <TableCell>{this.getProvinceName(c.theProvince)}</TableCell>
                    <TableCell>{this.getAmphorName(c.theAmphor)}</TableCell>
                    <TableCell>{c.theNumber}</TableCell>
                    <TableCell><EditIcon /></TableCell>
                </TableRow>
                );
            })}
            </TableBody>
        </Table>
        </Paper>
    )
    };
}

const mapStateToProps = (state) => {
  const { page, centers } = state.centerList;
  return { page, centers }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getCenters: (page) => dispatch(getCenters(page))
  }
}

const styledComp = withStyles(styles)(RadioCenterPageList);
export default connect(mapStateToProps, mapDispatchToProps)(styledComp);