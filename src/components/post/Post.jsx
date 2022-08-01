import * as React from "react";
import S from './Post.module.css'
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

export default function Post() {
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
              <div className={S.typographyText}>
                <Typography className={S.typographyText} variant="h6">{post?.title}</Typography>
                <Typography className={S.typographyText} variant="h9">{post?.body}</Typography>
              </div>
            
           
            <Typography className={S.typographyText} variant="h6">Comments</Typography>
            <div className={S.typography}>
                <Comments comments={comments} />
            </div>
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
