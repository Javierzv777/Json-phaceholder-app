import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';



export default function Comments( {comments} ) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);

  return (
    <Box sx={{ pb: 7, backgroundColor: "#dde7e7"}} ref={ref}>
      <CssBaseline />
      <List>
        {comments.map(({ name, body, email }, index) => (
          <ListItem button key={index }>
            <ListItemAvatar>
              <Avatar alt="Profile Picture" src={email} />
            </ListItemAvatar>
            <ListItemText primary={name} secondary={body} />
          </ListItem>
        ))}
      </List>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

      </Paper>
    </Box>
  );
}




