import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

function Title(props) {
  return (
    <div className="art-shadow h3">     
    <Typography style={{ lineHeight: "65px" }} component="h3" variant="h4"  color="#5b7a8e" 
    width='10%'
    gutterBottom>
    {props.children}
  </Typography>
</div>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;