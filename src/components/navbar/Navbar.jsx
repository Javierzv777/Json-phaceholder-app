import React from "react";
import S from "./navbar.module.css"
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();


  return (
    
    <AppBar position="static">
      <CssBaseline />
      <div className={S.navbar}>
        <Toolbar>
          <Typography variant="h4" className={classes.logo}>
            JsonPlaceHolder
          </Typography>
            <div className={classes.navlinks}>
              <Link to="/" className={classes.link}>
                Datatable
              </Link>
              <Link to="/newpost" className={classes.link}>
                New Post
              </Link>
              <Link to="/about" className={classes.link}>
                About
              </Link>
              <Link to="/faq" className={classes.link}>
                
              </Link>
            </div>
        </Toolbar>

      </div>
    </AppBar>
  );
}
export default Navbar;