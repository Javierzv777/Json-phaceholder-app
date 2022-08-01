import * as React from "react";
import S from './About.module.css';
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useSelector } from "react-redux";
import { Button } from "@mui/material";
import {
  createTheme,
  responsiveFontSizes,
  ThemeProvider,
} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Comments from "../comments/Comments.tsx";
import { useNavigate } from "react-router-dom";

let theme = createTheme();
theme = responsiveFontSizes(theme);

export default function About() {
    const navigate = useNavigate()
  const post = useSelector((state) => state.post);
  const comments = useSelector((state) => state.comments);
  const theme = createTheme({
    typography: {
      // Tell MUI what the font-size on the html element is.
      htmlFontSize: 10,
    },
  });
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#f0f1ff", height: "max-content" }}>
          <ThemeProvider theme={theme}>
              <br />
            <Typography className={S.typographyText} variant="h5">
            JSON placeholder app
            </Typography>
           
            <div className={S.typographyText}>
              <Typography  variant="h8">
              
              This application consumes the api https://jsonplaceholder.typicode.com/ bringing all the publications to the main page, it also shows the comments of each post by clicking on the icon of the second column, where the book is in each row that is displayed. you want to consult. In the penultimate column of each row you can see a pencil icon, clicking on the browser takes us to a window where you can edit a publication.
              and in the last column of each row there is a garbage can that will help us to delete a publication.
              If we want to create a new post, in the navigation bar we have a component called 'new post' that will direct us to a window where we can create a new post
              
              This app was made using React, Material ui, react-redux, module css, axios and Reacto-Router-Dom
              
              ##Run the application
              Install the dependencies with the npm install commands
              
              Run the app with npm start,
              Open http://localhost:3000 to see it in the browser.
              
              The page will reload if you make changes.
              You will also see any errors in the console.
                
              </Typography>
            </div>
            <br />
          

            <br />
            <Button
                  className={S.button}
                 
                  onClick={()=>navigate("/")}
                >
                  RETURN
                </Button>
                <br />
                <br />
                <br />
          </ThemeProvider>
         
        </Box>
      </Container>
    </React.Fragment>
  );
}
