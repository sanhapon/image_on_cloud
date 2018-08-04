import React from 'react';
import { connect } from 'react-redux';
import { backToList } from '../actions/navigate.action'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import RaisedButton from 'material-ui/RaisedButton';

class AlertDialog extends React.Component {

  onClick = () => {
    this.props.backToList(this.props.currentRoute);
  };

  render() {
    const { msg, open } = this.props;
    return (
      <div>
        <Dialog
          open={ open }
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{msg}</DialogTitle>
          <DialogActions>
            <RaisedButton label="ตกลง"
                              onClick={this.onClick}
                              primary={true} />
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { alertStatus, payload } = state.saveAlert;
  return {  
    msg: payload.msg, 
    open: alertStatus !== -999 };
}

const mapDispatchToProps = (dispatch) => {
  return {
    backToList : (currentRoute) => {
      dispatch(backToList(currentRoute));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertDialog);
