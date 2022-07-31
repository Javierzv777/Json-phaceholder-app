import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import S from "./Poems.module.css";
import { Button } from "@mui/material";

export default function Story() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#faf1f9", height: "120vh" }}>
          <Box
            sx={{
              maxWidth: "90%",
              padding: "10vh",
              margin: "auto",
             
            }}
          >
            <h1>New Poem</h1>
            <InputLabel>Author:</InputLabel>
            <TextField fullWidth label="Author" id="fullWidth" />
            <br />
            <br />
            <InputLabel>Title:</InputLabel>
            <TextField fullWidth label="title" id="fullWidth" />
            <br />
            <br />
            <br />
            <InputLabel>Body:</InputLabel>
            <TextField
              fullWidth
              id="outlined-multiline-static"
              label="story"
              multiline
              rows={8}
              //   defaultValue="Default Value"
            />
            <br />
            <br />
            <br />
            <br />
            <div className={S.button}>
              <Button className={S.button} variant="contained"  href="#contained-buttons">SUBMIT</Button>
            </div>

          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
