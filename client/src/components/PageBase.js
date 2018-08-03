import React from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from '../styles';

class PageBase extends React.Component {
    render() {
        const {title, navigation} = this.props;

        return (
          <div>
            <span style={globalStyles.navigation}>{navigation}</span>
    
            <Paper style={globalStyles.paper}>
              <h3 style={globalStyles.title}>{title}</h3>
    
              <Divider/>
              {this.props.children}
    
              <div style={globalStyles.clear}/>
    
            </Paper>
          </div>
        );
    }
};


export default PageBase;
