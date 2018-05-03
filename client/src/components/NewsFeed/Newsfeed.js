import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import List from "material-ui/List";
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

const styles = theme => ({

});

function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
<Paper style={{maxHeight: 460, overflow: 'auto'}}>
  <List>
  <Grid>
        <Grid itme size="xs-4 sm-2">
          <img src={props.img} />
        </Grid>
        <Grid item size="xs-8 sm-9">
        <a
            rel="noreferrer noopener"
            target="_blank"
            href={props.link}
          >{props.title}</a>

          <p>{props.summary}
          </p>
        </Grid>
      </Grid>
      <Divider />
  </List>
</Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
