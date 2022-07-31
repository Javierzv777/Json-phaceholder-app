import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import S from "./Poems.module.css";
import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';

export default function Story() {
  const dispatch = useDispatch()
    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => dispatch(newPoem(data));
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#f0f1ff", height: "123vh" }}>
          <Box
            sx={{
              maxWidth: "95%",
              padding: "10vh",
              margin: "auto",
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>New Poem</h1>
              <InputLabel>Author:</InputLabel>
              <TextField fullWidth label="Author" id="fullWidth" 
               {...register("author", { required: true })}/>
              <br />
              <br />
              <InputLabel>Title:</InputLabel>
              <TextField fullWidth label="title" id="fullWidth" 
               {...register("title", { required: true })}/>
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
                {...register("body", { required: true })}
              />
              <br />
              <br />
              <br />
              <br />
              
                <Button
                  className={S.button}
                  variant="contained"
                  type="submit"
                >
                  SUBMIT
                </Button>
            </form>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
