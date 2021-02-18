import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';


const CircularProgressWithLabel = (props) => {
  return (
    <div className="CircularProgres">
      <Box position="relative" display="inline-flex" color = {props.value < 100 ? '#FF6D4D' : '#57C870'}>
        <CircularProgress variant="determinate" {...props} size={100} color="inherit" />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color = "inherit">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
        <Box
          top={120}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center">{props.Name}
          </Box>
      </Box>
    </div>
  );
}
export default CircularProgressWithLabel;